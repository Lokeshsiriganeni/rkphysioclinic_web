import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h2 className="text-2xl font-bold text-gray-800">Logo</h2>

      <div className="flex space-x-8">
        <h2 className="text-lg font-medium cursor-pointer text-gray-600 hover:text-yellow-600 transition">
          About Us
        </h2>
        <h2 className="text-lg font-medium cursor-pointer text-gray-600 hover:text-yellow-600 transition">
          Contact Us
        </h2>
        <h2 className="text-lg font-medium cursor-pointer text-gray-600 hover:text-yellow-600 transition">
          Plans Details
        </h2>
      </div>
    </nav>
  );
}

export default Navbar;
