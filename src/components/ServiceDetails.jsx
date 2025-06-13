import React from 'react';
import { Star, MapPin, Calendar, Clock } from 'lucide-react';

const ServiceDetails = ({
  serviceName,
  rating,
  reviewCount,
  bookingDate,
  bookingTime,
  services,
  subtotal,
  tax,
  total
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-6">
      {/* Service Header with Image */}
      <div className="flex items-start space-x-4 mb-6">
        <img 
          src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
          alt="BarbeCue Salon"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{serviceName}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <Calendar size={16} />
          <span>Booking: June 19</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <Clock size={16} />
          <span>{bookingDate} - {bookingTime} (3 hours duration)</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <MapPin size={16} />
          <span>Ramachandra</span>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-3 mb-6">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-700">{service.name}</span>
            <span className="text-sm font-medium">₹{service.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600 mb-3">Price Breakdown</div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sub Total</span>
          <span className="text-gray-900">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax Amount (8%)</span>
          <span className="text-gray-900">+ ₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-black text-white py-3 rounded-lg font-medium mt-6 hover:bg-gray-800 transition-colors">
        Confirm Appointment
      </button>
    </div>
  );
};

export default ServiceDetails;