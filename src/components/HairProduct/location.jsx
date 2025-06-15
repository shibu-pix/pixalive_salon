import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

// Import your images
import Image1 from '../../assets/Home/recent1.jpg';
import Image2 from '../../assets/Home/recent2.png';

const recentlyViewed = [
  {
    title: "Hair Speak Family Salon",
    image: Image1,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Hair Salon",
  },
  {
    title: "Hair Speak Family Salon",
    image: Image2,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Hair Salon",
  },
];

const Location = () => {
  return (
    <div className="px-4 md:px-12 py-10">
      <h2 className="text-3xl md:text-3xl font-medium text-gray-800 mb-6">Other locations</h2>
      
      {/* Two cards in a row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {recentlyViewed.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                {item.rating}
                <FaStar className="text-black w-3 h-3" />
                <span className="text-indigo-600 ml-1">({item.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <GoLocation className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
              <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
