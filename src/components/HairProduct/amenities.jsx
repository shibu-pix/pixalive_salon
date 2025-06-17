import React from "react";
import {
  FaSnowflake,
  FaMoneyCheckAlt,
  FaMotorcycle,
  FaCar,
  FaUserShield,
  FaRestroom,
} from "react-icons/fa";

const amenities = [
  { icon: <FaSnowflake />, label: "Air Conditioned" },
  { icon: <FaMoneyCheckAlt />, label: "Online Payment" },
  { icon: <FaMotorcycle />, label: "Bike Parking" },
  { icon: <FaCar />, label: "Car Parking" },
  { icon: <FaUserShield />, label: "Staff Vaccinated" },
  { icon: <FaRestroom />, label: "Washroom" },
];

const AmenitiesSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-12  text-black">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-3x1 xl font-meadium mb-6">Amenities</h2>

      {/* Amenities Card */}
      <div className="bg-white border border-gray-200 rounded-xl px-12 py-4 w-fit outline-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-42">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-sm text-center"
            >
              <div className="text-xl text-gray-700 mb-2">{item.icon}</div>
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
