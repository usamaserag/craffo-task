import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="h-20 w-full px-4 flex items-center justify-between bg-slate-300 sticky">
      <div className="logo">Logo</div>
      <div className="flex items-center gap-6">
        <b>Item 1</b>
        <b>Item 2</b>
        <b>Item 3</b>
        <b>Item 4</b>
      </div>
      <div className="flex items-center gap-6">
        <FaSearch />
        <b>icon</b>
        <b>icon</b>
        <b>icon</b>
      </div>
    </nav>
  );
};

export default Navbar;
