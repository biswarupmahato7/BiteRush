const RestaurantDetails = [
  {
    id: 1,
    name: "Chinese Wok",
    rating: 4.5,
    deliveryTime: "40-45 mins",
    location: "Wip Mall",
    cuisine: ["Chinese", "Asian", "Tibetan"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0f3865f7-1667-44cc-a447-4e780328387d_32959.JPG",
  },
  {
    id: 2,
    name: "KFC",
    rating: 4.6,
    deliveryTime: "30-35 mins",
    location: "City Center",
    cuisine: ["Italian", "Pizza"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/773cb9c2-e1f5-44f4-838f-5908b74974a7_782991.JPG",
  },
  {
    id: 3,
    name: "Taco Town",
    rating: 4.7,
    deliveryTime: "25-30 mins",
    location: "Downtown Plaza",
    cuisine: ["Mexican", "Tacos"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/495f4621-66bf-4c84-a590-f9f3a6abd588_24227.jpg",
  },
  {
    id: 4,
    name: "Burger Barn",
    rating: 4.3,
    deliveryTime: "35-40 mins",
    location: "Main Street",
    cuisine: ["American", "Burgers", "Fast Food"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/22/b669e388-9bbb-4f7f-abc4-4faa78376fbc_330434.JPG  ",
  },
  {
    id: 5,
    name: "Wow Momo",
    rating: 4.8,
    deliveryTime: "20-25 mins",
    location: "Ocean View Mall",
    cuisine: ["Tibetan", "Asian"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/d7fd7d31-b815-4a33-a402-ef7d275877cb_895428.jpg",
  },
  {
    id: 6,
    name: "Starbucks Coffee",
    rating: 4.8,
    deliveryTime: "30-35 mins",
    location: "Heritage Plaza",
    cuisine: ["Beverages", "Coffe", "Tandoori"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/48cbfbd6-cd73-41fa-a22c-459a59e6e182_934180.JPG",
  },
  {
    id: 7,
    name: "Camdin Patisserie",
    rating: 4.2,
    deliveryTime: "20-25 mins",
    location: "Green Valley",
    cuisine: ["Bakery", "Desserts", "Snacks",],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/7/bc5f8314-fcd2-4941-b3e9-8f179adc6780_580086.jpg",
  },
  {
    id: 8,
    name: "The Chinese Kitchen",
    rating: 4.3,
    deliveryTime: "40-50 mins",
    location: "Hilltop Avenue",
    cuisine: ["Chines", "Rolls", "Momos"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/20/ee405c13-6903-4b9a-b23f-69b729003400_890340.jpg",
  },
  {
    id: 9,
    name: "Pasta Paradise",
    rating: 3.9,
    deliveryTime: "30-40 mins",
    location: "City Walk",
    cuisine: ["Italian", "Pasta"],
    image: "https://i0.wp.com/aartimadan.com/wp-content/uploads/2020/07/White-Sauce-Pasta.jpg?w=1000&ssl=1",
  },
  {
    id: 10,
    name: "Third Wave Coffee",
    rating: 4.6,
    deliveryTime: "25-30 mins",
    location: "East Market",
    cuisine: ["Beverages", "Coffee"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41",
  },
  {
    id: 11,
    name: "Dosha house",
    rating: 3.4,
    deliveryTime: "15-20 mins",
    location: "Sugar Street",
    cuisine: ["Dosha", "Edli"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/12/7a2db7e4-2002-4133-a075-693e7aa89a38_955157.jpg",
  },
  {
    id: 12,
    name: "Little Momo Cafe",
    rating: 4.7,
    deliveryTime: "30-35 mins",
    location: "Mediterranean Plaza",
    cuisine: ["Mediterranean", "Greek"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dwezhqimu77yrk4vdlca",
  },
  {
    id: 13,
    name: "Samrat Sweets",
    rating: 4,
    deliveryTime: "35-40 mins",
    location: "Spice Market",
    cuisine: ["Sweet", "GulabJamun"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tedgbgyzeer0z8fqypmx",
  },
  {
    id: 14,
    name: "Seafood Shack",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    location: "Harbor Bay",
    cuisine: ["Seafood", "Grill"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/da17c0bcc5dc5223b6c476e9c88475f9",
  },
  {
    id: 15,
    name: "Burger Lane",
    rating: 3.1,
    deliveryTime: "15-20 mins",
    location: "Central Park",
    cuisine: ["Cafe", "Coffee", "Bakery"],
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/59fcf06562729551dd7970d16e1cbde9",
  },
];

export default RestaurantDetails;
