// Sidebar.js
import React, { useEffect } from "react";

const Sidebar = ({ open, onClose }) => {
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
        className={`fixed top-0 left-0 h-full sm:w-64 w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-40 sidebar`}
        style={{ marginRight: "16px" }}
      >
        <h2>Sidebar Menu</h2>
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
