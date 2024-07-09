// Sidebar.js
import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import iphoneCases from "../assets/navbar_images/iphone-cases.webp";
import wirelessChargers from "../assets/navbar_images/wireless-chargers.webp";
import bundles from "../assets/navbar_images/bundles.jpg";

const categoryImages = [
  {
    title: "IPHONE CASES",
    text: "Give your iPhone one-of-a-kind character",
    src: iphoneCases,
  },
  {
    title: "CHARGERS",
    text: "Solutions to power all your tech",
    src: wirelessChargers,
  },
  {
    title: "BUNDLES",
    text: "Our essentials at a reduced price",
    src: bundles,
  },
];

const Sidebar = ({ open, onClose }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (open && !event.target.closest(".sidebar")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full sm:w-sidebar_width w-sidebar_width_phone pt-10 bg-white shadow-lg transform transition-transform duration-300 ease-in-out overflow-x-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-40 sidebar`}
        style={{ marginRight: "16px" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="px-6 flex flex-col gap-8">
            <button className="w-fit" title="close" onClick={onClose}>
              <AiOutlineClose className="text-xl" />
            </button>

            <div className="flex flex-col gap-4">
              <div className="pb-4 border border-t-0 border-r-0 border-l-0 border-gray-300">
                <div
                  className="flex items-center justify-between text-xl font-semibold cursor-pointer"
                  onClick={() => setIsCollapse(!isCollapse)}
                >
                  <p>SHOP BY CATEGORY</p>
                  {isCollapse ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
                {isCollapse && (
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center justify-between cursor-pointer">
                      <p>Protect & Carry</p>
                      <AiOutlinePlus />
                    </div>
                    <div className="flex items-center justify-between cursor-pointer">
                      <p>Cables</p>
                      <AiOutlinePlus />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {categoryImages.map((item, index) => (
                        <div className="flex flex-col items-center gap-2 cursor-pointer">
                          <div className="overflow-hidden">
                            <img
                              className="hover:scale-110 duration-500 ease-in-out"
                              src={item.src}
                              alt="title"
                            />
                          </div>
                          <p className="sm:text-base text-sm">{item.title}</p>
                          <p className="text-center text-xs">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pb-4 text-xl font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-gray-300 flex items-center justify-between">
                <p>SHOP BY DEVICE</p>
                <AiOutlinePlus />
              </div>
              <div className="pb-4 text-xl font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-gray-300 flex items-center justify-between">
                <p>COLLECTIONS</p>
                <AiOutlinePlus />
              </div>
              <div className="pb-4 text-xl font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-gray-300 flex items-center justify-between border-b-0">
                <p>MORE</p>
                <AiOutlinePlus />
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border border-b-0 border-gray-300">
            <div className="flex items-center gap-4 cursor-pointer">
              <AiOutlineUser />
              <span>Account</span>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
