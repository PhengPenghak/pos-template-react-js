import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";

import { useNavigate } from "react-router-dom";



const ButtomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button onClick={() => navigate("/")} className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] ">
        <FaHome className="inline mr-2 size={20} bg-[#343434]" />
        <p>Home</p>
      </button>
      <button onClick={() => navigate("/orders")} className="flex items-center justify-center text-[#f5f5f5]  w-[200px]">
        <MdOutlineReorder className="inline mr-2 size={20} " />
        <p>Orders</p>
      </button>
      <button onClick={() => navigate("/table")} className="flex items-center justify-center text-[#f5f5f5]  w-[200px]">
        <MdTableBar className="inline mr-2 size={20} " />
        <p>Table</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5]  w-[200px]">
        <CiCircleMore className="inline mr-2 size={20} " />
        <p>More</p>
      </button>

      <button className=" absolute bottom-5 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default ButtomNav;
