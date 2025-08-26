import React from "react";
import logo from "../../assets/images/logo_header.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/** Header */}
      <div className="flex items-center gap-2">
        {/* <img src={logo} alt="retro logo" className="h-8 w-8" /> */}
        <h1 className="font-semibold text-lg text-[#f5f5f5]">Restor</h1>
      </div>
      {/** Search */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder=""
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>
      {/** Logo user detail */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex item-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start ">
            <h1 className="text-md text-[#f5f5f5] font-semibold">PHENG Penghak</h1>
            <p className="text-sm text-[#ababab] font-medium">admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
