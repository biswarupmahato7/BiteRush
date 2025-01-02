/* eslint-disable no-unused-vars */
import React from 'react'
import FilterButton from './FilterButton'
import RestaurantCard from './RestaurantCard'


const Restaurant = () => {
  return (
    <>
    <div className='p-5 dark:bg-slate-900 '>
    <h2 className=' text-orange-400 font-bold text-3xl'>Restaurant Near You</h2>
    <FilterButton title="Rating 4.0+"/>
    <FilterButton title="Fast Delivery"/>
    <FilterButton title="Offers"/>
    <FilterButton title="Pure veg"/>


    <div className='flex  justify-center flex-wrap'>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>

    </div>

   

    </div>
      
    </>
  )
}

export default Restaurant
