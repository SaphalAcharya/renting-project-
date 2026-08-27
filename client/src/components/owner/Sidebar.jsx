import React, { useState } from "react";
import { assets, ownerMenuLinks } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState(null);

  const updateImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image); 
      const { data } = await axios.post("/api/owner/update-image", formData) 

      if (data.success) {
        fetchUser();
        toast.success(data.message);
        setImage('');
      }
      else{
        toast.error(data.message);
      }
    }catch (error) {
      toast.error(error.message);
    }
  };
  
  return (
    <div className="relative flex flex-col items-center w-20 md:w-64 min-h-screen bg-white border-r border-gray-200 py-8 shadow-sm">
      {/* Profile Image */}
      <div className="relative group">
        <label htmlFor="image" className="cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : user?.image || ""}
            alt="User"
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
          />

          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center rounded-full bg-black/30">
            <img
              src={assets.edit_icon}
              alt="Edit"
              className="w-6 h-6"
            />
          </div>
        </label>
      </div>

      {/* Save Button */}
      {image && (
        <button
          onClick={updateImage}
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
        >
          Save
          <img
            src={assets.check_icon}
            alt="Check"
            className="w-4 h-4"
          />
        </button>
      )}

      {/* User Name */}
      <h2 className="mt-4 text-base font-semibold text-gray-700 hidden md:block">
        {user?.name || "Owner"}
      </h2>

      {/* Sidebar Menu */}
      <div className="w-full mt-8">
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary font-semibold"
                : "text-gray-600 hover:bg-gray-100 hover:text-primary"
            }`}
          >
            <img
              src={
                link.path === location.pathname
                  ? link.coloredIcon
                  : link.icon
              }
              alt={link.name}
              className="w-5 h-5"
            />

            <span className="hidden md:block">
              {link.name}
            </span>

            {link.path === location.pathname && (
              <div className="absolute right-0 w-1 h-8 rounded-l-full bg-primary"></div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;