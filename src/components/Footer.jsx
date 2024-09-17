import React from 'react'
import Logo from '/MH_Logo.png'

const Footer = () => {
  return (
    <div className='md:flex justify-between items-center gap-24 bg-gray-700 py-8 md:px-32'>
      <div className='flex justify-center md:order-last'>
      <img src={Logo} alt="MovieHunt Logo" className='w-32 rounded-2xl shadow-2xl shadow-yellow-300' />
      </div>
      <div className='text-white font-light text-center md:text-start pt-12 md:pt-0'>
        <p className='text-4xl font-medium font-serif'>Get in Touch</p>
        <p>Quick movie search, real-time details. | <span className='text-yellow-300'>MovieHunt</span></p>
        <p>
            <a href="#" className='hover:underline'>Contact</a> | <a href="#" className='hover:underline'>T&C</a>
        </p>
        <p>Developed by Anand Yelloju.</p>
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
