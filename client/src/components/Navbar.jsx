import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import {motion} from "motion/react";

const Navbar = () => {
  const {setShowLogin, user, logout, isOwner, axios, setIsOwner}= useAppContext()
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const closeMenu = () => setOpen(false);
  const changeRole= async ()=>{
    try {
     const {data}= await axios.post('/api/owner/change-role')
     if(data.success){
      setIsOwner(true)
      toast.success(data.message)
     }else{
      toast.error(data.message)
     }

    } catch (error) {
        toast.error(error.message)
    }    

  }

  return (
    <>
      <motion.nav
      initial={{y:-20, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.5}}
        className={`flex items-center justify-between px-6 h-[60px] border-b border-borderColor relative z-50 transition-colors ${
          isHome ? "bg-light" : "bg-gray-50"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <motion.img
          whileHover={{scale:1.5}}
            src={assets.logo}
            alt="logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* RIGHT SIDE — all items together with uniform gap */}
        <div className="hidden sm:flex items-center gap-6">
          {/* Nav Links */}
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors
                         after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-0
                         after:bg-blue-600 after:rounded-full after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}

          {/* Search */}
          <div className="hidden lg:flex items-center gap-2 border border-borderColor bg-white px-3 py-1 rounded-full w-[180px] focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input
              type="text"
              placeholder="Search products"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
            <img
              src={assets.search_icon}
              alt="search"
              className="w-4 h-4 opacity-50"
            />
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-gray-200" />

          {/* Actions */}
          <button
            onClick={() => isOwner ? navigate("/owner"): changeRole() }
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-all cursor-pointer"
          >
            {isOwner ? 'Dashboard' : 'list cars'}
          </button>
          <button
            onClick={() => {user ? logout() :setShowLogin(true)}}
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-95 px-5 py-1.5 rounded-lg transition-all cursor-pointer shadow-sm"
          >
           {user?'logout': 'Login'}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col justify-center gap-[5px] p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-[2px] bg-gray-600 rounded-full transition-all duration-250 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-gray-600 rounded-full transition-all duration-250 ${open ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-gray-600 rounded-full transition-all duration-250 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <motion.div
        className={`sm:hidden fixed top-[60px] right-0 w-[280px] h-[calc(100vh-60px)] z-50
                    bg-white border-l border-borderColor shadow-xl
                    flex flex-col p-4
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Search */}
        <div className="flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-2 rounded-lg mb-2">
          <img
            src={assets.search_icon}
            alt="search"
            className="w-4 h-4 opacity-40"
          />
          <input
            type="text"
            placeholder="Search products"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Nav Links */}
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={closeMenu}
            className="text-[15px] font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-all"
          >
            {link.name}
          </Link>
        ))}

        <div className="h-px bg-gray-100 my-2" />

        <button
          onClick={() => {
            navigate("/owner");
            closeMenu();
          }}
          className="text-left text-[15px] font-medium text-gray-700 hover:bg-gray-100 px-3 py-2.5 rounded-lg transition-all cursor-pointer"
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            setShowLogin(true);
            closeMenu();
          }}
          className="text-[15px] font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-lg transition-all cursor-pointer text-center mt-1"
        >
          Login
        </button>
      </motion.div>

      {/* Backdrop */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
