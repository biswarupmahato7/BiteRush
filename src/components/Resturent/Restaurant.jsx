/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FilterButton from './FilterButton';
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from '../../utils/RestaurantDetails';

const Restaurant = () => {
  //  track active filters----UI
  const [filters, setFilters] = useState({
    rating: false,
    fastDelivery: false,
    offers: false,
    pureVeg: false,
  });
///////
  // Toggle filter state
  const toggleFilter = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  // Check if any Filters are active
  const areFiltersActive = Object.values(filters).some((isActive) => isActive);

  // Filter the restaurant data ...........
  const filteredRestaurants = areFiltersActive
    ? RestaurantDetails.filter((restaurant) => {
        let isMatch = true;

        // my  filters
        if (filters.rating && restaurant.rating < 4.0) isMatch = false;
        if (filters.fastDelivery && parseInt(restaurant.deliveryTime) > 30) isMatch = false;
        if (filters.offers && restaurant.rating <= 4.0) isMatch = false;
        if (filters.pureVeg && !restaurant.cuisine.includes('Vegan')) isMatch = false;

        return isMatch;
      })
    : RestaurantDetails; // Show all restaurants 

  return (
    <>
      <div className="p-5 dark:bg-slate-900">
        <h2 className="text-orange-400 font-bold text-3xl">Restaurant Near You</h2>
        <div className="flex gap-2">
          <FilterButton
            title="Rating 4.0+"
            onClick={() => toggleFilter('rating')}
            isActive={filters.rating}
          />
          <FilterButton
            title="Fast Delivery"
            onClick={() => toggleFilter('fastDelivery')}
            isActive={filters.fastDelivery}
          />
          <FilterButton
            title="Offers"
            onClick={() => toggleFilter('offers')}
            isActive={filters.offers}
          />
          <FilterButton
            title="Pure veg"
            onClick={() => toggleFilter('pureVeg')}
            isActive={filters.pureVeg}
          />
        </div>

        <div className="flex justify-center flex-wrap mt-5">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                location={restaurant.location}
                cuisine={restaurant.cuisine}
                image={restaurant.image}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No restaurants match the selected filters.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
