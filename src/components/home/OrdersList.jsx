import React from 'react'
import { FaCheckDouble, FaCircle } from 'react-icons/fa'

const OrdersList = () => {
    return (
        <div className='flex items-center gap-5'>
            <button className='bg-[#f6b100] p-2 text-xl font-bold rounded-lg'>AM</button>
            <div className="flex justify-between items-center w-[100%]">
                <div className="flex items-start flex-col gap-1">
                    <h1 className='text-[#f5f5f5] font-semibold text-lg tracking-wide'>Sok Chea</h1>
                    <p className='text-sm text-[#ababab]'>8 Item</p>
                </div>
                <div>
                    <h1 className='bg-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1'>Table No: 3</h1>
                </div>
                <div className="flex items-start flex-col gap-1">
                    <p className='px-4 text-green-400'><FaCheckDouble className='inline mr-4' />Ready</p>
                    <p className='text-sm text-[#ababab]'><FaCircle className='inline mr-4 text-green-400' />Ready to serve</p>

                </div>

            </div>
        </div>
    )
}

export default OrdersList