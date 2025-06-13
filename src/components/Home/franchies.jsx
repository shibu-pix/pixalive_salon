import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Image imports
import Logo1 from "../../assets/Home/recent1.jpg";
import Logo2 from "../../assets/Home/recent1.jpg";
import Logo3 from "../../assets/Home/recent1.jpg";

const franchiseDetails = {
  name: "Body Craft Clinic & Salon",
  rating: 4.3,
  reviews: 32,
  location: "Electronic City, Bengaluru",
  description: `Discover the best brands near you,<br/> offering top-notch services and<br/> exclusive deals to enhance your<br/>grooming experience.`,
};

const TopFranchises = () => {
  return (
    <section className="bg-gray-50 px-4 md:px-12 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium text-gray-800">
          Top Franchises around you
        </h2>
        <div className="flex gap-2">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
            aria-label="Previous"
          >
            <MdChevronLeft size={20} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
            aria-label="Next"
          >
            <MdChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Logos Column */}
        <div className="flex flex-col gap-4">
          {[Logo1, Logo2, Logo3].map((logo, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo}
                alt={`Franchise ${idx + 1}`}
                className="w-full h-28 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Detail Card (2 columns) */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm relative">
            {/* Decorative Quote */}
            <div className="text-8xl text-gray-200 absolute top-4 right-6 select-none pointer-events-none">
              “
            </div>

            {/* Enlarged Description */}
            <p
              className="text-2xl md:text-3xl font-meadium text-gray-800 mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: franchiseDetails.description }}
            />
<br/><br />
            {/* Info */}
            <h3 className="text-sm font-semibold text-gray-900">
              {franchiseDetails.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-700 mt-1">
              {franchiseDetails.rating}
              <FaStar className="text-black w-3 h-3" />
              <span className="text-indigo-600 ml-1">
                ({franchiseDetails.reviews})
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <GoLocation className="w-4 h-4" />
              <span>{franchiseDetails.location}</span>
            </div>

            {/* Explore Button */}
            <div className="border-t border-dashed mt-6 pt-6">
              <button className="px-4 py-2 w-32 bg-black text-white rounded text-sm hover:bg-gray-900 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFranchises;
