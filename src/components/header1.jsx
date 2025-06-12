import React from 'react';
import { FiUser, FiMenu } from 'react-icons/fi';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

// Local images
import img1 from "./../../assets/Home/hero1.jpg";
import img2 from "./../../assets/Home/hero2.jpg";
import img3 from "./../../assets/Home/hero3.jpg";
import img4 from "./../../assets/Home/hero4.jpg";
import img5 from "./../../assets/Home/hero5.jpg";
import img6 from "./../../assets/Home/hero6.jpg";

const HeroSection = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const rotations = ["-5deg", "-3deg", "0deg", "0deg", "3deg", "5deg"];

  return (
    <div className="min-h-screen font-lufga bg-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded text-lg font-semibold">
            P
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-sm cursor-pointer hover:underline">Log in</span>
          <FiMenu size={24} className="cursor-pointer" />
          <FiUser size={24} className="cursor-pointer" />
        </div>
      </header>

      {/* Curved Image Strip */}
      <div className="flex justify-center items-center gap-4 px-6 py-6 overflow-x-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-28 h-36 rounded-md overflow-hidden shadow-md"
            style={{
              transform: `rotate(${rotations[index]})`,
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={src}
              alt={`img-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="text-center px-4 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Book local beauty and<br />wellness services
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 mx-auto mt-10 w-fit shadow-sm overflow-x-auto bg-white">
        {/* Filter: Treatment */}
        <button className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaSearch className="text-black" />
          All Treatments and venues
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Filter: Location */}
        <button className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaMapMarkerAlt className="text-black" />
          Current location
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Filter: Date */}
        <button className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaCalendarAlt className="text-black" />
          Any date
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Filter: Time */}
        <button className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaClock className="text-black" />
          Any time
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1"></div>

        {/* Search Button */}
        <button className="bg-black text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800 whitespace-nowrap">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
