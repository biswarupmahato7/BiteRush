/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from '../../assets/BR.png'
import {FaCartShopping} from 'react-icons/fa6'
import DarkMode from './DarkMode'
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineAddLocationAlt } from "react-icons/md";

const Header = () => {
  return (
    <>
    <div 
    className='shadow-md bg-white dark:bg-slate-900 
    dark:text-white duration-200 sticky top-0 z-10'>
        <div className='container py-3 sm:py-0'>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <a href="" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
                        <img src={Logo} alt="logo"
                          className='w-10'
                         />BiteRush
                    </a>
                    <ul className='ml-10'>
                    <li>
                        <a
                        className='flex items-center gap-1 inline-block py-4 px-4 hover:text-primary'
                        href=""> <MdOutlineAddLocationAlt /> Location</a>
                        </li>

                    </ul>
                </div>

                {/* right side */}
                <div className='flex items-center gap-4'>
                    <div>
                        <DarkMode/>
                    </div>
                    <ul className='hidden sm:flex gap-4'>
                        <li>
                            <a 
                            className='inline-block py-4 px-4 hover:text-primary'
                            href="">Home</a>
                        </li>
                        <li>
                        <a
                        className='inline-block py-4 px-4 hover:text-primary'
                        href="">About</a>

                        </li>

                        <li>
                        <a
                        className='flex items-center gap-1 inline-block py-4 px-4 hover:text-primary'
                        href=""> <BiSolidOffer />Offers</a>
                        </li>

                        <li>
                        <a
                        className='flex items-center gap-1 inline-block py-4 px-4 hover:text-primary'
                        href=""> <MdOutlineAccountCircle /> Login</a>
                        </li>
                        
                    </ul>
                    <button
                     className='flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full hover:scale-105 duration-300 sm:hidden'
                    >Order
                    <FaCartShopping
                    className="text-xl text-white drop-shadow-sm cursor-pointer"
                    />
                    </button>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Header
