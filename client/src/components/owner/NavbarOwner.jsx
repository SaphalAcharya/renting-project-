import React from "react";
import { assets, dummyUserData } from "../../assets/assets";
import { Link } from "react-router-dom";

const NavbarOwner = () => {
  const user = dummyUserData;

  return (
    <nav className="w-full flex items-center justify-between bg-white px-6 md:px-10 py-4 shadow-sm">
      <Link to="/owner/dashboard" className="flex items-center">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-10 w-auto object-contain"
        />
      </Link>

      <h2 className="text-sm md:text-lg font-semibold text-gray-700">
        Welcome,{" "}
        <span className="text-primary">
          {user.name || "Owner"}
        </span>
        !
      </h2>
    </nav>
  );
};

export default NavbarOwner;