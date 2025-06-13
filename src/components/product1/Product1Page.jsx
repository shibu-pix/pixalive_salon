import React from "react";

const Product1Page = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Review & Confirm</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Payment Method */}
            <div>
              <label className="block font-semibold mb-2">Online Payment</label>
              <select className="w-full p-3 border rounded">
                <option>I’ll make the full payment online</option>
              </select>
            </div>

            {/* Discount Code */}
            <div>
              <label className="block font-semibold mb-2">Discount Code</label>
              <input
                type="text"
                placeholder="Enter Discount Code"
                className="w-full p-3 border rounded"
              />
            </div>

            {/* Booking Notes */}
            <div>
              <label className="block font-semibold mb-2">Booking Notes</label>
              <textarea
                rows="5"
                className="w-full p-3 border rounded"
                placeholder=""
              ></textarea>
            </div>
          </div>

          {/* Right Column - Summary Card */}
          <div className="bg-white p-4 rounded shadow-md">
            <div className="flex gap-3 mb-4">
              <img
                src="https://via.placeholder.com/60"
                alt="shop"
                className="w-14 h-14 object-cover rounded"
              />
              <div>
                <p className="font-semibold">BarberCo - Men's Salon and Barbershop</p>
                <p className="text-sm text-gray-500">Koramangala, Bengaluru</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>🗓️ Sunday, June 15</p>
              <p>⏰ 10:00 am - 10:25 am (25 mins duration)</p>
              <p>📍 Premalatha</p>
            </div>

            <hr className="my-4" />

            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Eyebrows</span> <span>₹60</span>
              </div>
              <div className="flex justify-between">
                <span>Hair Cut (Style Director)</span> <span>₹60</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="text-sm">
              <div className="flex justify-between">
                <span>Sub Total</span> <span>₹120.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span> <span>₹20.44</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-2">
                <span>Total</span> <span>₹140.44</span>
              </div>
            </div>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-10 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-sm mb-2">
              From bold ideas to real-world tech — Pixalive is where innovation comes alive.
            </p>
            <p className="text-xs">© 2025 Pixalive Technology Services. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Contact</p>
            <p className="text-sm">contact@pixalivetech.com</p>
            <p className="text-sm">+91 87785 84566</p>
            <p className="text-sm">Pixalive Salon Network Private Limited, Electronic City, Bengaluru</p>
          </div>
        </div>
        <h1 className="text-6xl md:text-[100px] font-black mt-10 text-center">Pixalive</h1>
      </footer>
    </div>
  );
};

export default Product1Page;
