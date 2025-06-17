import React from "react";
import hero from "../../assets/Home/recent1.jpg";

const HeroSalonSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-12">
      {/* Hero Image Box */}
      <div className="w-full rounded-2xl overflow-hidden relative h-[300px] md:h-[400px]">
        {/* Background Image */}
        <img
          src={hero}
          alt="Salon Background"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40 z-10"></div>

        {/* Overlay Text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-meadium mb-4">
            Find Hair Salons near me
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Search for top hair salons near me
          </p>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
            Search near me
          </button>
        </div>
      </div>

      {/* Scrollable Pills */}
      <div className="flex gap-4 overflow-x-auto mt-8 py-2 scrollbar-hide">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="whitespace-nowrap border border-gray-300 rounded-full px-6 py-2 text-sm font-medium bg-white shadow-sm hover:bg-gray-100 transition"
          >
            Hair Salon in E-City Near me
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSalonSection;
