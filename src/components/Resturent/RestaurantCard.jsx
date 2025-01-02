/* eslint-disable no-unused-vars */
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RestaurantCard = () => {
  const rating = 4.5; // Dynamic rating value

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const halfStar = rating % 1 >= 0.5; // Check if there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining stars

    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500 inline-block" />);
    }

    // Add half star
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
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0f3865f7-1667-44cc-a447-4e780328387d_32959.JPG"
          alt="restaurant img"
          className='rounded-lg h-44 w-80 object-cover'
        />
        <h1 className='font-bold dark:text-white'>Chinese Wok</h1>
        <span className='dark:text-white flex items-center gap-1'>
          {renderStars(rating)} ({rating})
        </span>
        <span className='font-semibold text-green-500 '>40-45 mins</span>
        <p className='dark:text-white opacity-50'>Chinese, Asian, Tibetan</p>
        <p className='dark:text-white'>Wip Mall</p>
      </div>
    </>
  );
};

export default RestaurantCard;
