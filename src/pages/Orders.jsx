// import React, { useState } from 'react'
// import ButtomNav from '../components/shared/ButtomNav'
// import OrderCard from '../components/orders/OrderCard'
// import BackButtom from '../components/shared/BackButtom'
// const Orders = () => {
//   const [status, setStatus] = useState("all")
//   return (
//     <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
//       <div className="flex items-center justify-between px-10 py-4 mt-2">
//         <div className="flex items-center gap-4">
//           <BackButtom />
//           <h1 className="text-[#f5f5f5] font-bold tracking-wide text-2xl">Orders</h1>
//         </div>
//         <div className="flex items-center justify-around gap-4">
//           <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg rounded-lg ${status === "all" && 'bg-[#383838] rounded-lg px-5 py-2 font-semibold'} px-5 py-2 font-semibold`}>All</button>
//           <button onClick={() => setStatus("progress")} className={`text-[#ababab] text-lg rounded-lg ${status === "progress" && 'bg-[#383838] rounded-lg px-5 py-2 font-semibold'} px-5 py-2 font-semibold`}> In progress</button>
//           <button onClick={() => setStatus("ready")} className={`text-[#ababab] text-lg rounded-lg ${status === "ready" && 'bg-[#383838] rounded-lg px-5 py-2 font-semibold'} px-5 py-2 font-semibold`}>Ready</button>
//           <button onClick={() => setStatus("complated")} className={`text-[#ababab] text-lg rounded-lg ${status === "complated" && 'bg-[#383838] rounded-lg px-5 py-2 font-semibold'} px-5 py-2 font-semibold`}>Complated</button>

//         </div>
//       </div>
//       <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />
//         <OrderCard />

//       </div>
//       <ButtomNav />
//     </section>
//   )
// }

// export default Orders


import React, { useState } from 'react'
import ButtomNav from '../components/shared/ButtomNav'
import OrderCard from '../components/orders/OrderCard'
import BackButtom from '../components/shared/BackButtom'

// Status options for filtering orders
const statusOptions = [
  { key: "all", label: "All" },
  { key: "progress", label: "In progress" },
  { key: "ready", label: "Ready" },
  { key: "completed", label: "Completed" }
]

const Orders = () => {
  // State to track the selected status filter
  const [status, setStatus] = useState("all")

  // Dummy array for demonstration; replace with real data as needed
  const orderCount = 22
  const orders = Array.from({ length: orderCount })

  return (
    // Main section container with background and height styling
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      {/* Header: Back button, title, and status filter buttons */}
      <div className="flex items-center justify-between px-10 py-4 mt-2">
        <div className="flex items-center gap-4">
          <BackButtom />
          <h1 className="text-[#f5f5f5] font-bold tracking-wide text-2xl">Orders</h1>
        </div>
        {/* Status filter buttons */}
        <div className="flex items-center justify-around gap-4">
          {statusOptions.map(option => (
            <button
              key={option.key}
              onClick={() => setStatus(option.key)}
              aria-pressed={status === option.key} // Accessibility: indicate active button
              className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === option.key ? 'bg-[#383838]' : ''
                }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      {/* Orders list: displays OrderCard components */}
      <div className="flex flex-wrap gap-6 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-10rem-5rem)]">
        {orders.map((_, idx) => (
          <OrderCard key={idx} />
        ))}
      </div>
      {/* Bottom navigation bar */}
      <ButtomNav />
    </section>
  )
}

export default Orders