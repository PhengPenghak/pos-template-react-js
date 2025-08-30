import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrderCard = () => {
    return (
        <div className='w-[590px] bg-[#262626] p-4 rounded-lg mb-4 hover:bg-[#2c2c2c]'>
            <div className="flex items-center gap-5">
                <button className='bg-[#f6b100] p-2 text-xl font-bold rounded-lg'>AM</button>
                <div className="flex justify-between items-center w-[100%]">
                    <div className="flex items-start flex-col gap-1">
                        <h1 className='text-[#f5f5f5] font-semibold text-lg tracking-wide'>Sok Chea</h1>
                        <p className='text-sm text-[#ababab]'>8 Item</p>
                    </div>
                    <div>
                    </div>
                    <div className="flex items-end flex-col gap-2">
                        <p className='px-2 text-green-600 bg-[#2e4a40] rounded-lg'><FaCheckDouble className='inline mr-2' />Ready</p>
                        <p className='text-sm text-[#ababab]'><FaCircle className='inline mr-4 text-green-600' />Ready to serve</p>

                    </div>

                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-[#ababab]">
                <p>January 18,2025 08:32 PM</p>
                <p>8 Items</p>
            </div>
            <hr className='w-full mt-4 border-t-1 border-gray-500' />
            <div className="flex items-center justify-between mt-4">
                <h1 className='text-[#f5f5f5] text-lg font-semibold'>Total</h1>
                <p className='text-[#f5f5f5] text-lg font-semibold'>$250.00</p>
            </div>
        </div>)
}

export default OrderCard