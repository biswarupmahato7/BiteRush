/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from 'react';


const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );

      const element = document.documentElement;
      
      useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem('theme', 'dark')
        }else{
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
      },[theme])

    const changeTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
  return (
    <>
      <div className='relative'>
      <MdLightMode
       onClick={changeTheme} 
       className='w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px rgba(0,0,0,0.1)]
       transition-all duration-300
      '/>
      <MdDarkMode
        onClick={changeTheme} 
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `} />
      </div>
    </>
  );
};

export default DarkMode;
