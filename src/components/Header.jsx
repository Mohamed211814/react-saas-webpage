import React, { useState } from 'react'


import { GiHamburgerMenu, GiMoldova } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";



export default function Header() {

    const [mobileNav , setMobileNav] = useState(false)

    const toggleNavbar = () =>{
        setMobileNav(!mobileNav)
    }

    const links = ['Features' , 'Workflow' , 'Pricing' , 'Testimonials']

  return (
    <div className='flex justify-between items-center m-auto py-4 px-10 shadow-lg border-b-[1px] border-b-gray-500 sticky-top-0'>
        {/* LOGO SECTION */}
        <div>
            <div>
                <h1 className='font-bold'><span className='text-orange-600'>VirTual</span>2024</h1>
            </div>
        </div>

        {/* CENTER OR SECION LINKS */}
        <div className='hidden lg:flex'>
            <div>
                <ul className='flex gap-10'>
                    {
                        links.map((link , index) => <li className='hover:border-b border-orange-600 transition
                        duration-300' key={index}><a href="##">{link}</a></li>)
                    }
                </ul>
            </div>
        </div>

        {/* RIGHT OR LOGIN SECTION */}
        <div>
            <div className='md:flex gap-8 hidden'>
                <button className='border rounded-md py-1 px-3 font-semibold hover:bg-orange-950 transition duration-300'>Sign in</button>
                <button className='border rounded-md py-1 px-3 bg-orange-700 font-semibold hover:bg-orange-800
                transition duration-300'>Create an account</button>
            </div>
            <button className='md:hidden lg:hidden' onClick={toggleNavbar}>
                {mobileNav ?  <IoCloseSharp /> : <GiHamburgerMenu />}
            </button>
        </div>
        {
            mobileNav && (
                <div className='fixed top-16 right-0 z-20 bg-neutral-900 
                w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul className='flex flex-col justify-center items-center'>
                        {
                            links.map((link , index) => <li className='mt-4 hover:border-b border-orange-600 transition
                            duration-300'><a href="#">{link}</a></li>)
                        }
                    </ul>
                    <button className='border rounded-md py-1 px-3 font-semibold mt-4 mb-4 hover:bg-orange-950 transition duration-300'>Sign in</button>
                    <button className='border rounded-md py-1 px-3 bg-orange-700 font-semibold hover:bg-orange-800
                    transition duration-300'>Create an account</button>
                </div>
            )
        }
    </div>
  )
}
