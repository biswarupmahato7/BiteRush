import React from 'react'

const FilterButton = ({title}) => {
  return (
    <>
    <div className='p-1 mt-4 mr-4  dark:border-white border border-black rounded-full  inline-block hover:bg-slate-500 duration-700'>
        <h1 className='dark:text-white p-1 cursor-pointer  duration-700'>{title}</h1>
    </div>
      
    </>
  )
}

export default FilterButton
