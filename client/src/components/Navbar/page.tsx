import Link from 'next/link'
import React from 'react'
import Logo from '../Logo/page'

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full grid grid-cols-[1fr_3fr_1fr] bg-[#f4f4f4] p-6 z-50 drop-shadow-md'>
      <div id='logo'>
        <Logo/>
      </div>

      <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-center space-x-5'>
            <li className='cursor-pointer text-[#848484] text-[16px] font-normal hover:font-semibold hover:scale-105 transition-transform duration-200'>Products</li>
            <li className='cursor-pointer text-[#848484] text-[16px] font-normal hover:font-semibold hover:scale-105 transition-transform duration-200'>Categories</li>
            <li className='cursor-pointer text-[#848484] text-[16px] font-normal hover:font-semibold hover:scale-105 transition-transform duration-200'>Support</li>
            <li className='cursor-pointer text-[#848484] text-[16px] font-normal hover:font-semibold hover:scale-105 transition-transform duration-200'>Contact</li>
        </ul>
      </div>

      <div className='flex items-center justify-center'>
        <Link href='/login'>
            <span className='text-[#ff8c00] hover:text-slate-600 text-[1.4rem] font-bold'>
                Login
            </span>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar
