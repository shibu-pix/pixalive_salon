import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import Service from '../../assets/Service/service.png';

const serviceData = [
  {
    category: "Women's Cut & Blow Dry",
    services: Array(7).fill({
      title: 'Hair Cut (Style Director)',
      duration: '60 mins',
      price: 1602,
    }),
  },
  {
    category: 'Hair Colour',
    services: Array(4).fill({
      title: 'Global Hair Colour',
      duration: '90 mins',
      price: 2200,
    }),
  },
  {
    category: 'Hair Treatments',
    services: Array(4).fill({
      title: 'Keratin Treatment',
      duration: '120 mins',
      price: 3200,
    }),
  },
  {
    category: 'Essential Hair Care',
    services: Array(2).fill({
      title: 'Keratin Treatment',
      duration: '120 mins',
      price: 4100,
    }),
  },
];

const ServiceSelection = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const toggleService = (service, category) => {
    const key = `${category}-${service.title}`;
    const exists = selectedServices.some((s) => s.key === key);

    if (exists) {
      setSelectedServices(selectedServices.filter((s) => s.key !== key));
    } else {
      setSelectedServices([...selectedServices, { ...service, key }]);
    }
  };

  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-17 px-4 md:px-12 py-12 mx-auto">
      {/* Left: Service List */}
      <div className="w-full lg:w-4/5">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Home &gt; Salon &gt; Bodycraft Salon & Spa &gt;{' '}
          <span className="text-black font-medium">Booking Service</span>
        </div>

        {/* Page Title */}
        <h2 className="text-3xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
          <FaChevronLeft className="text-base text-gray-500" />
          Select Services
        </h2>
<br />
        {/* Tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex overflow-x-auto gap-3 px-2 hide-scrollbar">
            {serviceData.map((group, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-semibold transition ${
                  activeTab === idx
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-200'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Arrows on the right */}
          <div className="flex items-center gap-2 ml-4">
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <FaChevronLeft lassName="text-md text-gray-500" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <FaChevronRight />
            </button>
          </div>
        </div>
<br />
        {/* Grouped Services */}
        {serviceData.map((group, idx) =>
          idx === activeTab ? (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <div className="space-y-4">
                {group.services.map((service, index) => {
                  const key = `${group.category}-${service.title}`;
                  const isSelected = selectedServices.some((s) => s.key === key);
                  return (
                    <div
                      key={index}
                      className="border p-4 rounded-lg flex justify-between items-center hover:shadow transition"
                    >
                      <div>
                        <p className="font-medium">{service.title}</p>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                        <p className="font-semibold mt-1">₹{service.price}</p>
                      </div>
                      <button
                        onClick={() => toggleService(service, group.category)}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 text-xl rounded-full hover:bg-black hover:text-white transition"
                      >
                        {isSelected ? '-' : '+'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* Right: Booking Summary */}
      <div className="w-full lg:w-2/5 space-y-4">
        {/* Summary Card */}
        <div className="border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <img
              src={Service}
              alt="Venue"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold text-sm">
                BarberCo - Men's Salon and Barbershop
              </p>
              <div className="flex items-center text-black-500 text-sm">
                <span>4.2</span>
                <FaStar className="ml-1" />
                <span className="text-gray-500 ml-1">(20)</span>
              </div>
              <p className="text-xs text-gray-500">Koramangala, Bengaluru</p>
            </div>
          </div>

          {/* Selected Services */}
          <div className="mt-2 text-sm text-gray-600">
            {selectedServices.length === 0 ? (
              <p>No service selected</p>
            ) : (
              <ul className="list-disc pl-4 space-y-1">
                {selectedServices.map((s, idx) => (
                  <li key={idx}>{s.title}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Total Price */}
          <div className="mt-2 flex justify-between font-semibold text-lg border-t text-gray-600">
            <span className="mt-2 mb-16" >Total</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          {/* Continue Button */}
          <button className="mt-4 w-full py-2 bg-gray-300 rounded-lg font-semibold text-black hover:bg-black hover:text-white transition">
            Continue
          </button>
        </div>

        {/* Support Info */}
        <div className="border rounded-xl p-4 mb-3 text-sm">
          <p className="font-semibold">📞 Give us a call</p>
          <p className="text-gray-600">We'd be happy to help you out with your booking</p>
          <p className="mt-1 font-semibold text-black text-sm">
            Call us:{' '}
            <a href="tel:+919876541237" className="underline">
              +91 98765 41237
            </a>
          </p>
        </div>

        <div className="border rounded-xl p-4 mb-3 text-sm">
          <p className="font-semibold">🎧 24/7 customer support</p>
          <p className="text-gray-600">Get the answers you need, when you need them</p>
        </div>

        <div className="border rounded-xl p-4 text-sm">
          <p className="font-semibold">🔒 Privacy protection</p>
          <p className="text-gray-600">We use SSL encryption to keep your data secure</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
