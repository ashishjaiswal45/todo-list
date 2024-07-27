import React from 'react'

function Navbar() {
  return (
    <nav className='flex bg-indigo-800 text-white justify-between py-2'>
        <span className="logo font-bold text-xl mx-8">TODO-LIST</span>
       <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
       </ul>
    </nav>
  )
}

export default Navbar