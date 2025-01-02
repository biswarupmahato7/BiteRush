/* eslint-disable no-unused-vars */
import React from 'react'
import { menu_list } from '../assets/frontEnd/assets'

const MenuExplorer = () => {
  return (
    <div className='exp-menu flex flex-col gap-5 p-5 dark:bg-slate-800 dark:text-white'>
        <h1 className='text-orange-400 font-bold text-3xl'>Top Choice</h1>
        <p className='exp-m-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.</p>
        <div className='exp-m-list flex justify-between text-center gap-7 mt-[20px] mb-[5px] mx-0
         
        overflow-x-scroll [::-webkit-scrollbar]{display:none;} p-7' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {menu_list.map((item,idx)=>{
                return (
                    <div key={idx} className='menu-list-item'>
                        <img className='hover:scale-110 duration-200 cursor-pointer' src={item.menu_image} alt="" />
                        <p className='mt-3 cursor-pointer font-semibold'>{item.menu_name}</p>

                    </div>
                )
            })}
        </div>
        <hr className='m-2 bg-black h-[1px] border-0 dark:bg-white ' />
    </div>
  )
}

export default MenuExplorer
