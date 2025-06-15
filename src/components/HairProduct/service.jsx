import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const serviceTabs = [
  "Women's Cut & Blow Dry",
  "Hair Colour",
  "Hair Treatments",
  "Essential Hair Care",
];

const services = [
  { title: "Hair Cut (Creative Director)", duration: "60 mins", price: "₹1322" },
  { title: "Hair Cut (Top Stylist)", duration: "60 mins", price: "₹999" },
  { title: "Hair Cut (Senior Stylist)", duration: "45 mins", price: "₹799" },
  { title: "Zero Trim", duration: "30 mins", price: "₹150" },
  { title: "Beard Trim", duration: "30 mins", price: "₹350" },
  { title: "Beard Design", duration: "30 mins", price: "₹499" },
  { title: "Wash & Blast Dry", duration: "45 mins", price: "₹599" },
  { title: "Head Massage (15 Mins)", duration: "30 mins", price: "₹999" },
];

const ServiceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full pt-2  pb-8 text-black">
      <div className="mx-auto px-4 md:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-3x1 font-meadium mb-4">Services</h2>

        {/* Tabs + Arrows in left column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              {/* Tabs */}
              <div className="flex gap-5 items-center overflow-x-auto scrollbar-hide">
                {serviceTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`text-sm font-semibold transition ${
                      index === activeTab
                        ? "bg-black text-white px-5 py-1.5 rounded-full"
                        : index === serviceTabs.length - 1
                        ? "text-gray-400"
                        : "text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2 ml-4 shrink-0">
                <button className="text-black text-lg p-1 border rounded hover:bg-gray-100">
                  <FiChevronLeft />
                </button>
                <button className="text-black text-lg p-1 border rounded hover:bg-gray-100">
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Services List */}
            <div className="flex flex-col gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border border-gray-200 bg-white rounded-lg px-4 py-3 hover:shadow-sm transition"
                >
                  <div>
                    <p className="font-medium">{service.title}</p>
                    <p className="text-sm text-gray-500">{service.duration}</p>
                    <p className="font-semibold mt-1">{service.price}</p>
                  </div>
                  <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
                    Book
                  </button>
                </div>
              ))}

              {/* See All Button */}
              <div className="mt-4">
                <button className="text-sm border border-gray-300 px-4 py-1.5 rounded hover:bg-gray-100">
                  See all
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Empty/Hidden */}
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
