import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Image imports (ensure correct paths)
import Img1 from "../../assets/Home/recent1.jpg";
import Img2 from "../../assets/Home/recent2.png";
import Img3 from "../../assets/Home/rate1.jpg";
import Img4 from "../../assets/Home/rate2.jpg";

const topRatedSalons = [
  {
    title: "The Aesthetic Studio",
    image: Img1,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Medspa",
  },
  {
    title: "Bodycraft Salon & Spa",
    image: Img2,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Barber",
  },
  {
    title: "Essensuals by Toni&Guy",
    image: Img3,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Massage",
  },
  {
    title: "Toni & Guy Hairdressing",
    image: Img4,
    rating: 4.3,
    reviews: 32,
    location: "Electronic City, Bengaluru",
    category: "Medspa",
  },
];

const TopRatedSalons = () => {
  return (
    <div className=" px-4 md:px-12 py-10 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-3xl font-meadium text-gray-800">Top Rated Salons</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200">
            <MdChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200">
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {topRatedSalons.map((salon, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={salon.image}
              alt={salon.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-900">{salon.title}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
                {salon.rating}
                <FaStar className="text-black w-3 h-3" />
                <span className="text-indigo-600 ml-1">({salon.reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                <GoLocation className="w-4 h-4" />
                <span>{salon.location}</span>
              </div>
              <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                {salon.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedSalons;
