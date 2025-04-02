import React from "react";
import SearchMenu from "./SearchMenu.jsx";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div>
          <SearchMenu />
        </div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/admin" className="text-white hover:text-gray-300">
            Admin
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
