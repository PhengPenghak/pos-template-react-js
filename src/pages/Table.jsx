// import React, { useState } from 'react'
// import ButtomNav from '../components/shared/ButtomNav'
// import TableCard from '../components/Tables/TableCard'
// import BackButtom from '../components/shared/BackButtom'
// import { tableData } from '../constants' // adjust the path as needed
// const statusOptions = [
//     { key: "all", label: "All" },
//     { key: "booked", label: "Booked" }
// ]
// const Table = () => {
//     // Status options for filtering orders
//     const [status, setStatus] = useState("all")

//     return (

//         <section className='bg-[#1f1f1f] overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem)] overflow-hidden'>
//             <div className="flex items-center justify-between px-10 py-4">
//                 <div className="flex items-center gap-4">
//                     <BackButtom />
//                     <h1 className="text-white text-2xl font-semibold tracking-wide">Order</h1>
//                 </div>
//                 {/* Status filter buttons */}
//                 <div className="flex items-center justify-around gap-4">
//                     {statusOptions.map(option => (
//                         <button
//                             key={option.key}
//                             onClick={() => setStatus(option.key)}
//                             aria-pressed={status === option.key} // Accessibility: indicate active button
//                             className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === option.key ? 'bg-[#383838]' : ''
//                                 }`}
//                         >
//                             {option.label}
//                         </button>
//                     ))}
//                 </div>

//             </div>
//             <div className="flex flex-wrap gap-5 px-10">

//                 {tableData.map(table => (
//                     <TableCard
//                         key={table.id}
//                         name={table.name}
//                         status={table.status}
//                         initial={table.initial}
//                     />
//                 ))}

//             </div>
//             <ButtomNav />
//         </section>
//     )
// }

// export default Table
import React, { useState } from 'react'
import ButtomNav from '../components/shared/ButtomNav'
import TableCard from '../components/Tables/TableCard'
import BackButtom from '../components/shared/BackButtom'
import { tableData } from '../constants' // adjust the path as needed

// Status options for filtering tables
const statusOptions = [
    { key: "all", label: "All" },
    { key: "booked", label: "Booked" }
]

const Table = () => {
    // State to track the selected status filter
    const [status, setStatus] = useState("all")

    // Filter tables based on selected status
    const filteredTables = status === "all"
        ? tableData
        : tableData.filter(table => table.status.toLowerCase() === status)

    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
            {/* Header: Back button, title, and status filter buttons */}
            <div className="flex items-center justify-between px-10 py-4">
                <div className="flex items-center gap-4">
                    <BackButtom />
                    <h1 className="text-white text-2xl font-semibold tracking-wide">Tables</h1>
                </div>
                {/* Status filter buttons */}
                <div className="flex items-center justify-around gap-4">
                    {statusOptions.map(option => (
                        <button
                            key={option.key}
                            onClick={() => setStatus(option.key)}
                            aria-pressed={status === option.key}
                            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${status === option.key ? 'bg-[#383838]' : ''
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
            {/* Table cards list with vertical scroll */}
            <div className="flex flex-wrap gap-5 px-10 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
                {filteredTables.length > 0 ? (
                    filteredTables.map(table => (
                        <TableCard
                            key={table.id}
                            name={table.name}
                            status={table.status}
                            initial={table.initial}
                        />
                    ))
                ) : (
                    <div className="text-white text-lg">No tables found.</div>
                )}
            </div>
            <ButtomNav />
        </section>
    )
}

export default Table