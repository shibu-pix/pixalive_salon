import React from "react";
import {
  FaStar,
  FaRegClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShareAlt,
  FaRegHeart,
} from "react-icons/fa";
import salonImg from "../../assets/Home/recent1.jpg"; // Replace with actual image
import thumb1 from "../../assets/HairProduct/pro1.png";
import thumb2 from "../../assets/HairProduct/pro2.png";
import thumb3 from "../../assets/HairProduct/pro3.png";

const SalonDetailSection = () => {
  return (
    <div className=" px-4 md:px-12 py-24 text-black">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-2">
        Home &gt; Saloon &gt;{" "}
        <span className="text-black font-medium">Bodycraft Saloon & Spa</span>
      </p>

      {/* Title and Meta */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-meadium">Toni & Guy Hairdressing</h2>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 flex-wrap">
            <span className="flex items-center gap-1 text-black font-medium">
              4.3 <FaStar className="text-black-500" />
            </span>
            <span className="text-blue-600 font-medium">(32)</span>
            <span className="text-green-600">• Open</span>
            <span className="text-gray-500">until 10:00PM</span>
            <span className="text-gray-500">• Koramangala, Bengaluru</span>
            <a href="#" className="text-blue-600 font-medium ml-2">
              Get direction
            </a>
          </div>
        </div>

        {/* Share & Favorite */}
        <div className="flex items-center gap-3 text-xl text-gray-700">
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <FaShareAlt />
          </div>
          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <FaRegHeart />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* Left - Image and Gallery */}
        <div className="w-full lg:w-2/3">
          <img
            src={salonImg}
            alt="Salon"
            className="rounded-xl w-full h-[400px] object-cover"
          />

          <div className="flex gap-4 mt-4">
            {[thumb1, thumb2, thumb3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb${i}`}
                className="w-28 h-20 rounded-lg object-cover"
              />
            ))}
            <div className="w-28 h-20 rounded-lg bg-black/50 bg-opacity-40 flex items-center justify-center text-white text-sm font-medium cursor-pointer">
              See more
            </div>
          </div>
        </div>

        {/* Right - Two Stacked Cards */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Top Card - Info + Booking */}
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h3 className="text-xl font-meadium mb-1">Toni & Guy Hairdressing</h3>
            <p className="inline-block pr-3 text-sm bg-white rounded-full text-gray-500 mb-2">
              Hair Salon
            </p>
            <div className="flex items-center gap-2 mb-1 text-sm text-gray-600">
              <span className="font-medium text-black">4.3</span>
              <FaStar className="text-black-500" />
              <span className="text-blue-600">(32)</span>
            </div>
            <p className="text-sm text-gray-700 mb-1">Services start from </p>
            <p className="text-xl font-bold text-black mb-4">₹99</p>

            <button className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
              Book now
            </button>
          </div>

          {/* Bottom Card - Contact Info */}
          <div className="bg-gray-50 p-5 rounded-xl shadow space-y-2.5 text-sm text-gray-700">
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <FaRegClock className="text-gray-800" />
              <span>Open</span>
              <span className="text-gray-800">until 10:00 pm</span>
            </div>

            <div className="flex items-start gap-1">
              <FaMapMarkerAlt className="mt-1" />
              <div className="flex items-center gap-2">
                <span>Shop No: A008, Koramangala Bengaluru, Karnataka</span>
                <a href="#" className="text-blue-600 ml-auto">Get direction</a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>9167886732</span>
              <a href="#" className="text-blue-600 ml-auto">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetailSection;
