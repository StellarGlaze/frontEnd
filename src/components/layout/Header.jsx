// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-50 bg-opacity-80 p-4 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Left side - Logo */}
      <div>
        <img src="logo.png" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Center - Three options */}
      <div className="flex justify-center">
        <div className="mx-4">Option 1</div>{" "}
        <div className="mx-4">Option 2</div>
        <div className="mx-4">Option 3</div>
      </div>

      {/* Right side - Connect Wallet */}
      <div>
        {/* Replace 'your-logo.png' with your actual logo file */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
