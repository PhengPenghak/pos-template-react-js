import React, { useState } from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const ButtomNav = () => {
  const navigate = useNavigate();

  const [isModelOpen, setIsModelOpen] = useState(false);
  const openModel = () => setIsModelOpen(true);
  const closeModel = () => setIsModelOpen(false);

  const [guestCount, setGuestCount] = useState(0);
  const increment = () => {
    if (guestCount < 20) {
      setGuestCount(guestCount + 1);
    }
  }
  const decrement = () => {
    if (guestCount > 0) {
      setGuestCount(guestCount - 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] "
      >
        <FaHome className="inline mr-2 size={20} bg-[#343434]" />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="flex items-center justify-center text-[#f5f5f5]  w-[200px]"
      >
        <MdOutlineReorder className="inline mr-2 size={20} " />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/table")}
        className="flex items-center justify-center text-[#f5f5f5]  w-[200px]"
      >
        <MdTableBar className="inline mr-2 size={20} " />
        <p>Table</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5]  w-[200px]">
        <CiCircleMore className="inline mr-2 size={20} " />
        <p>More</p>
      </button>

      <button
        onClick={openModel}
        className=" absolute bottom-5 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <BiSolidDish size={30} />
      </button>
      <Modal isOpen={isModelOpen} onClose={closeModel} title="Create Order">
        <div className="mb-4">
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="customerName"
              id="customerName"
              placeholder="Enter customer name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="customerPhone"
              id="customerPhone"
              placeholder="+85586823955"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
            Guest
          </label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button onClick={decrement} className="text-yellow-500 text-2xl">&minus;</button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">&#43;</button>
          </div>
        </div>
        <button onClick={() => navigate("/table")} className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">
          Create Order
        </button>

      </Modal>
    </div>
  );
};

export default ButtomNav; 
