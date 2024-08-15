import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 shadow-sm mb-[3px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo.svg"
            alt="Logo"
            className="h-8"
          />
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-[#666666] font-semibold px-4 py-2 rounded-full hover:underline transition duration-200"
          >
            Back to STARSTRUCK
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
