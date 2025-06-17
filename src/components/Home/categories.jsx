import React from "react";
import Hair from '../../assets/Home/cate1.png';
import Parlor from '../../assets/Home/cate2.png';
import Nail from '../../assets/Home/cate3.png';
import Spa from '../../assets/Home/cate4.png'; // Note: Make sure the 'H' in 'Home' is capital if that's your folder name

const categories = [
  {
    title: "Haircut Salon",
    image: Hair,
  },
  {
    title: "Parlor",
    image: Parlor,
  },
  {
    title: "Nail Salon",
    image: Nail,
  },
  {
    title: "Spa",
    image: Spa,
  },
];

const TopCategories = () => {
  return (
    <div className=" px-4 md:px-12 py-10">
      <h2 className="text-3xl md:text-3xl font-meadium text-gray-800 mb-6">Top Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-36 object-cover"
            />
            <div className="text-center py-2 text-gray-700 font-medium">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
