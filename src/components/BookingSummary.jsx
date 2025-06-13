import React from 'react';
import { Star, MapPin, Calendar, Clock } from 'lucide-react';

const BookingSummary = () => {
  const serviceData = {
    serviceName: "BarbeCue - Men's Salon and Barbershop",
    rating: 4.7,
    reviewCount: 233,
    services: [
      { name: "Eyebrows", price: 80.00 },
      { name: "Hair Cut Style (Director)", price: 80.00 }
    ],
    total: 120
  };

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
          <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{serviceData.serviceName}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(serviceData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({serviceData.reviewCount})</span>
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
          <span>10:00 am - 12:30 pm (2.5 hours duration)</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <MapPin size={16} />
          <span>Premachandra</span>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-3 mb-6">
        {serviceData.services.map((service, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-700">{service.name}</span>
            <span className="text-sm font-medium">₹{service.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200 mb-6">
        <span className="text-gray-900">Total</span>
        <span className="text-gray-900">₹{serviceData.total}</span>
      </div>

      {/* Confirm Button */}
      <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
        Confirm Appointment
      </button>
    </div>
  );
};

export default BookingSummary;