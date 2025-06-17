import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

// Import different salon images or repeat if only 3 are available
import Salon1 from "../../assets/Home/recent1.jpg";
import Salon2 from "../../assets/Home/recent2.png";
import Salon3 from "../../assets/Home/recent3.jpg";

const salons = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  image: [Salon1, Salon2, Salon3][index % 3],
  name: "The Aesthetic Studio",
  rating: 4.3,
  reviews: 32,
  location: "Electronic City, Bengaluru",
  services: [
    {
      name: "Ladies- Crazy Colour (By Quotation)",
      time: "1h 45min - 2h 15min",
      price: "₹299",
    },
    {
      name: "Alopecia Areta Injection",
      time: "40min",
      price: "₹599",
    },
    {
      name: "Brow Lift",
      time: "30min",
      price: "₹399",
    },
  ],
}));

const SalonCards = () => {
  return (
    <div className=" px-4 md:px-12 py-12">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-3xl font-meadium text-gray-900 mb-1">
          Best Global Hair Salons
        </h2>
        <p className="text-sm text-gray-600">
          Choose from 23,532 Hair Salons near you{" "}
          <span className="text-blue-600 underline cursor-pointer">
            See map near me
          </span>
        </p>
      </div>

      {/* Grid: 3 columns x 3 rows = 9 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {salons.map((salon) => (
          <div
            key={salon.id}
            className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden"
          >
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full h-[200px] object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-gray-900">{salon.name}</h3>
              <div className="flex items-center text-sm text-gray-700 mt-1 mb-2">
                <FaStar className="text-black-500 mr-1" />
                {salon.rating}
                <span className="ml-1 text-blue-600 cursor-pointer">({salon.reviews})</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <GoLocation className="mr-1" />
                {salon.location}
              </div>
              <div className="text-sm text-gray-800 space-y-2 border-t pt-2">
                {salon.services.map((service, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <div>{service.name}</div>
                      <div className="text-xs text-gray-500">{service.time}</div>
                    </div>
                    <div className="text-right font-medium">{service.price}</div>
                  </div>
                ))}
                <div className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline">
                  See all service
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalonCards;
