import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Star, Clock, Phone, Shield, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [discountCode, setDiscountCode] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [showPriceBreakdown, setShowPriceBreakdown] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span>Home</span> <span className="mx-2">›</span>
        <span>Salon</span> <span className="mx-2">›</span>
        <span>Bodycraft Salon & Spa</span> <span className="mx-2">›</span>
        <span className="text-gray-900">Booking Service</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Review Form */}
        <div className="lg:col-span-2">
          {/* Back button and title */}
          <div className="flex items-center mb-8">
            <Link to="/booking">
              <ChevronLeft className="w-5 h-5 mr-2 cursor-pointer" />
            </Link>
            <h1 className="text-2xl font-semibold">Review & Confirm</h1>
          </div>

          {/* Online Payment */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Online Payment</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-3"
                  />
                  <span>I'll make the full payment online</span>
                </label>
                <button className="text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Discount Code */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Discount Code</h2>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Discount Code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="text-gray-500 bg-transparent border-none outline-none"
                  />
                </div>
                <button className="text-gray-400">
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Booking Notes */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Booking Notes</h2>
            <textarea
              value={bookingNotes}
              onChange={(e) => setBookingNotes(e.target.value)}
              placeholder="Add any special requests or notes for your appointment..."
              className="w-full h-24 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Column - Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            {/* Salon Info */}
            <div className="flex mb-6">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="BarberCo"
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">BarberCo - Men's Salon and Barbershop</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm">4.2</span>
                  <div className="flex ml-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-1">(20)</span>
                </div>
                <p className="text-sm text-gray-500">Koramangala, Bengaluru</p>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span>Sunday, June 15</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span>10:00 am - 10:25 am (25 mins duration)</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 mr-2">👤</span>
                <span>Premalatha</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">Eyebrows</div>
                  <div className="text-sm text-gray-500">15 mins</div>
                </div>
                <div className="font-medium">₹60</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">Hair Cut (Style Director)</div>
                  <div className="text-sm text-gray-500">10 mins</div>
                </div>
                <div className="font-medium">₹60</div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mb-6">
              <button
                onClick={() => setShowPriceBreakdown(!showPriceBreakdown)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="font-medium">Price Breakdown</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showPriceBreakdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showPriceBreakdown && (
                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>₹120.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Amount 18%</span>
                    <span>₹ 20.44</span>
                  </div>
                </div>
              )}
            </div>

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹140.44</span>
              </div>
            </div>

            {/* Confirm Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors">
              Confirm Appointment
            </button>

            {/* Support Info */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Phone className="w-4 h-4 mr-3 mt-1" />
                <div>
                  <div className="font-medium text-sm">Give us a call</div>
                  <div className="text-xs text-gray-500">We'd be happy to help you out with your booking</div>
                </div>
              </div>
              <div className="flex items-start">
                <HeadphonesIcon className="w-4 h-4 mr-3 mt-1" />
                <div>
                  <div className="font-medium text-sm">24/7 customer support</div>
                  <div className="text-xs text-gray-500">Get the answers you need, when you need them</div>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-4 h-4 mr-3 mt-1" />
                <div>
                  <div className="font-medium text-sm">Privacy protection</div>
                  <div className="text-xs text-gray-500">We use SSL encryption to keep your data secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;