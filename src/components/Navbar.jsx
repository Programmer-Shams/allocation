import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="px-3 md:px-10 py-3 flex items-center justify-between">
      <a href="/">
        <img src={logo} className="logo react" alt="logo" />
      </a>
      <button className="bg-[#1D77FF] text-sm p-2 md:px-6 md:py-3 text-white rounded-lg font-semibold">Open App</button>
    </nav>
  );
};

export default Navbar;
