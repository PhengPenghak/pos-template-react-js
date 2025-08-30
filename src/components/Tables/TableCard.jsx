import React from 'react'
import { getRandomBG } from '../../utils'

const TableCard = ({ key, name, status, initial }) => {
  return (
    <div key={key} className='w-[590px] bg-[#262626] p-4 rounded-lg mb-4 cursor-pointer hover:bg-[#2c2c2c]'>
      <div className="flex items-center justify-between px-1">
        <h1 className="text-white font-semibold text-xl">{name}</h1>
        <p
          className={`px-2 py-1 rounded-lg font-semibold capitalize ${status === 'booked'
            ? 'bg-[#2e4a40] text-green-600'
            : 'text-white bg-[#664a04]'
            }`}
        >
          {status}
        </p>      </div>
      <div className="flex items-center justify-center my-5 ">
        <h1 className={`${getRandomBG()} text-white  text-xl rounded-full p-5`}>{initial}</h1>
      </div>
    </div>
  )
}

export default TableCard