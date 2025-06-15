import React from "react";
import { FaStar } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import SalonImage from "../../assets/Home/recent1.jpg"; // Replace with your actual image

const services = [
  {
    category: "Women's Cut & Blow Dry",
    list: Array(6).fill({
      name: "Hair Cut (Style Director)",
      duration: "60 mins",
      price: "₹1602",
    }),
  },
  {
    category: "Hair Colour",
    list: Array(4).fill({
      name: "Hair Colour (Expert)",
      duration: "60 mins",
      price: "₹1602",
    }),
  },
];

const BookingSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-10 bg-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT: SERVICES */}
        <div className="w-full lg:w-3/4 space-y-8">
          {/* Top Categories */}
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {["Women's Cut & Blow Dry", "Hair Colour", "Hair Treatments", "Essential Hair Care", "Spa"].map((cat) => (
              <button key={cat} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-black hover:text-white">
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards */}
          {services.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-lg font-semibold mb-3">{section.category}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {section.list.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-lg p-4 shadow-sm hover:shadow transition-all duration-300"
                  >
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.duration}</p>
                    <p className="text-base font-semibold mt-2">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: SALON CARD */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white border shadow-md rounded-xl overflow-hidden">
            <img src={SalonImage} alt="Salon" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">BarberCo - Men's Salon and Barbershop</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <FaStar className="text-yellow-500 mr-1" />
                4.2 <span className="ml-1">(20)</span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <GoLocation className="mr-1" /> Koramangala, Bengaluru
              </div>
              <div className="mt-4 text-sm text-red-500 font-medium">No service selected</div>
              <div className="flex justify-between items-center mt-4 border-t pt-3 text-sm font-semibold">
                <span>Total</span>
                <span>₹0.00</span>
              </div>
              <button className="w-full bg-black text-white mt-4 py-2 rounded-md hover:bg-gray-800">
                Continue
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-sm text-gray-700 mt-8 space-y-4">
            <div>
              <h4 className="font-semibold">Give us a call</h4>
              <p>We'd be happy to help you out with your booking</p>
              <p className="text-black font-medium">+91 98765 41237</p>
            </div>
            <div>
              <h4 className="font-semibold">24/7 customer support</h4>
              <p>Get the answers you need, when you need them</p>
            </div>
            <div>
              <h4 className="font-semibold">Privacy protection</h4>
              <p>We use SSL encryption to keep your data secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 border-t pt-6 text-center text-xs text-gray-400">
        <p>Pixalive Salon Network Private Limited, Electronic City, Bengaluru</p>
        <p>
          Contact: <span className="text-black">contact@pixalivetech.com</span> | +91 87785 84566
        </p>
        <p className="mt-1">&copy; 2025 Pixalive Technology Services. All rights reserved.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default BookingSection;
