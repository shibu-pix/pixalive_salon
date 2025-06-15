import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

// Replace with actual image if using static map
import MapImage from "../../assets/HairProduct/map.png"; // OR use a real map iframe below

const AboutSection = () => {
  return (
    <div className=" px-4 md:px-12 py-4 text-black">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl font-medium mb-3">About</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mb-6">
        Pixalive Salon Network connects top salons with customers through a
        seamless digital platform, offering easy booking, exclusive deals, and
        quality services.
      </p>

      {/* Map with location pin */}
      <div className="relative rounded-xl overflow-hidden w-full max-w-3xl h-100">
        <img src={MapImage} alt="Map" className="w-full object-cover" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <FaMapMarkerAlt className="text-white text-lg" />
          </div>
        </div>
      </div>

      {/* Address */}
      <p className="text-sm mt-4 max-w-3xl">
        Banashankari 3rd Stage, Block Sree Complex, No.59, Banashankari, 7
        Block, Bengaluru,<br /> Karnataka{" "}
        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="text-blue-600 underline"
          rel="noreferrer"
        >
          Get directions
        </a>
      </p>
    </div>
  );
};

export default AboutSection;
