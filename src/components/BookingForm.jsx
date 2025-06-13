import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BookingForm = () => {
  const [paymentOnline, setPaymentOnline] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <div className="flex items-center space-x-2">
          <span>Home</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span>Search</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span>Restaurant, Saloon & Spa</span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-gray-900 font-medium">Booking Service</span>
        </div>
      </nav>

      {/* Back button and title */}
      <div className="flex items-center space-x-4 mb-8">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Review & Confirm</h1>
      </div>

      {/* Online Payment Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Online Payment</h2>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={paymentOnline}
            onChange={(e) => setPaymentOnline(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-gray-700">I'll make the full payment online</span>
        </label>
      </div>

      {/* Discount Code Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Discount Code</h2>
        <div className="flex items-center">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <button className="ml-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Booking Notes Section */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Booking Notes</h2>
        <textarea
          placeholder="Add any special notes for your booking..."
          value={bookingNotes}
          onChange={(e) => setBookingNotes(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
        />
      </div>
    </div>
  );
};

export default BookingForm;