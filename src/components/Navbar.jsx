// Navbar.js
import React, { useState, useEffect } from "react";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMenu,
} from "react-icons/ai";
import FocalLogo from "../assets/logo/logo-focal.avif";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="h-20 w-full px-8 flex items-center justify-between bg-gray-800 sticky top-0 text-white">
        {isSmallScreen ? (
          <div className="flex items-center gap-6">
            <AiOutlineMenu
              className="text-2xl cursor-pointer"
              onClick={handleMenuClick}
            />
            <AiOutlineSearch className="text-2xl cursor-pointer" />
          </div>
        ) : (
          <div className="logo cursor-pointer">
            <img className="w-full h-full" src={FocalLogo} alt="logo" />
          </div>
        )}
        {isSmallScreen ? (
          <div className="logo cursor-pointer">
            <img className="w-full h-full" src={FocalLogo} alt="logo" />
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <div>Shop by Category</div>
            <div>Shop by Device</div>
            <div>Collections</div>
            <div>Blog</div>
          </div>
        )}
        <div className="flex items-center gap-6">
          {!isMobile && <AiOutlineMail className="text-2xl cursor-pointer" />}
          {!isSmallScreen && (
            <AiOutlineSearch className="text-2xl cursor-pointer" />
          )}
          {!isMobile && <AiOutlineUser className="text-2xl cursor-pointer" />}
          <div className="relative">
            <p className="absolute -top-1 -right-3 h-5 w-5 rounded-full bg-white text-black flex items-center justify-center">
              <small className="text-xs">0</small>
            </p>
            <AiOutlineShopping className="text-2xl cursor-pointer" />
          </div>
        </div>
      </nav>
      <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
};

export default Navbar;
