import React from 'react'
import ButtomNav from '../components/shared/ButtomNav'
import OrderCard from '../components/orders/OrderCard'

const Orders = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <h1 className="text-[#f5f5f5] font-bold tracking-wide text-2xl">Orders</h1>
        <div className="flex items-center justify-around gap-4">
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>All</button>
          <button className='text-[#ababab] text-lg rounded-lg bg-[#383838] px-5 py-2 font-semibold'>Orders</button>
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>Inprogress</button>
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>Complated</button>

        </div>
      </div>
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

      </div>
      <ButtomNav />
    </section>
  )
}

export default Orders