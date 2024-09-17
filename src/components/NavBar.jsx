import React from 'react'
import Logo from '/MH_Logo.png'

const NavBar = () => {
  return (
    <div >
      <div className='flex justify-center  bg-gray-700 p-1'>
        <img src={Logo} alt="MovieHunt Logo" className='w-14 p-2' />
        <p className='text-5xl font-extrabold text-white'>Movie<span className='text-yellow-400'>Hunt</span></p>
      </div>
      <div></div>
    </div>
  )
}

export default NavBar
