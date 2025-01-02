/* eslint-disable no-unused-vars */
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const RestaurantCard = ({name,rating,deliveryTime,location,cuisine,image} ) => {
  
   // Dynamic rating value

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining stars

    const stars = [];

    //  full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 inline-block" />);
    }

    // half star
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500 inline-block" />);
    }

    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500 inline-block" />);
    }

    return stars;
  };

  return (
    <>
      <div className='m-8 w-64 shadow-[0px_10px_15px_rgba(0,0,0,0.7)] dark:shadow-[0px_10px_15px_rgba(255,255,255,0.2)] p-2 rounded-md dark:bg-gray-600 hover:scale-95'>
        <img
          src={image}
          alt="restaurant img"
          className='rounded-lg h-44 w-80 object-cover'
        />
        <h1 className='font-bold dark:text-white'>{name}</h1>
        <span className='dark:text-white flex items-center gap-1'>
          {renderStars(rating)} ({rating})
        </span>
        <span className='font-semibold text-green-500 '>{deliveryTime}</span>
        <p className='dark:text-white opacity-50'>{cuisine.join(", ")}</p>
        <p className='dark:text-white'><FaLocationDot  className='text-red-500 inline-block'/> {location}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
