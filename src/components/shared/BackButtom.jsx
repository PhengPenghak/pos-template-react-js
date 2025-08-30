// import React from 'react'
// import { IoArrowBackOutline } from 'react-icons/io5'
// import { useNavigate } from 'react-router-dom'
// const BackButtom = () => {
//   const navigate = useNavigate();
//   return (
//     <button onClick={() => navigate(-1)} className='bg-[#f6b100] p-3 text-xl font-bold rounded-lg'>
//       <IoArrowBackOutline />
//     </button>

//   )
// }

// export default BackButtom

import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

/**
 * BackButtom component
 * Renders a button that navigates back to the previous page.
 */
const BackButtom = () => {
  const navigate = useNavigate();

  // Handler for navigating back
  const handleBack = () => navigate(-1);

  return (
    <button
      onClick={handleBack}
      className="bg-[#f6b100] p-3 text-xl font-bold rounded-lg hover:bg-[#e0a800] transition-colors"
      aria-label="Go back"
      type="button"
    >
      <IoArrowBackOutline aria-hidden="true" />
    </button>
  )
}

export default BackButtom