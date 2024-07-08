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
import CollectionsMenu from "./CollectionsMenu";
import DeviceMenu from "./DeviceMenu";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [collectionsVisible, setCollectionsVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);

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
          <div className="flex items-center h-full gap-6">
            <div
              className="h-full flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setCategoryVisible(true)}
              onMouseLeave={() => setCategoryVisible(false)}
            >
              <span className="nav-link">Shop by Category</span>
            </div>
            <div
              className="h-full flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setDeviceVisible(true)}
              onMouseLeave={() => setDeviceVisible(false)}
            >
              <span className="nav-link">Shop by Device</span>
            </div>
            <div
              className="h-full flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setCollectionsVisible(true)}
              onMouseLeave={() => setCollectionsVisible(false)}
            >
              <span className="nav-link">Collections</span>
            </div>
            <div className="nav-link cursor-pointer">Blog</div>
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
      {collectionsVisible && (
        <CollectionsMenu
          visible={collectionsVisible}
          setCollectionsMenuVisible={setCollectionsVisible}
        />
      )}
      {deviceVisible && (
        <DeviceMenu
          visible={deviceVisible}
          setDeviceMenuVisible={setDeviceVisible}
        />
      )}
      {categoryVisible && (
        <CategoryMenu
          visible={categoryVisible}
          setCategoryMenuVisible={setCategoryVisible}
        />
      )}
      <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
};

export default Navbar;
