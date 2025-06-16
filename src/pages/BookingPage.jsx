import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Phone,
  Shield,
  HeadphonesIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format, addDays, startOfWeek } from 'date-fns';

const BookingPage = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedProfessional, setSelectedProfessional] = useState('any');
  const [selectedTime, setSelectedTime] = useState('10:00 am');

  const professionals = [
    { id: 'any', name: 'Any professional', subtitle: 'For maximum availability', initial: '👥' },
    { id: 'premalatha', name: 'Premalatha', subtitle: 'Beautician', initial: 'P', rating: 4.2 },
    { id: 'somunaath', name: 'Somunaath', subtitle: 'Hair Stylist', initial: 'S', rating: 4.2 }
  ];

  const timeSlots = [
    '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm',
    '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'
  ];

  const selectedProfData = professionals.find(p => p.id === selectedProfessional);

  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Start from Monday
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

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
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center mb-8">
            <ChevronLeft className="w-5 h-5 mr-2" />
            <h1 className="text-2xl font-semibold">Select Professionals</h1>
          </div>

          {/* Professionals */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {professionals.map((prof) => (
              <button
                key={prof.id}
                onClick={() => setSelectedProfessional(prof.id)}
                className={`p-4 rounded-lg border-2 text-center ${
                  selectedProfessional === prof.id
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold text-sm mb-2">
                  {prof.initial}
                </div>

                {prof.rating && (
                  <div className="flex items-center justify-center mb-1">
                    <span className="text-sm font-medium">{prof.rating}</span>
                    <Star className="w-3 h-3 ml-1 fill-current text-black" />
                  </div>
                )}

                <div className="font-medium text-sm">{prof.name}</div>
                <div className="text-xs text-gray-500">{prof.subtitle}</div>
              </button>
            ))}
          </div>

          {/* Date & Time */}
          <h2 className="text-xl font-semibold mb-6">Select Date & Time</h2>

          <div className="flex items-center mb-6 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
              {selectedProfData.initial}
            </div>
            <span className="text-sm">{selectedProfData.name}</span>
            <button className="ml-auto">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Week Calendar */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{format(selectedDate, 'MMMM yyyy')}</h3>
              <div className="flex space-x-2">
                <button><ChevronLeft className="w-4 h-4" /></button>
                <button><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {weekDates.map((day) => (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`p-3 rounded-lg text-center w-20 ${
                    selectedDate.toDateString() === day.toDateString()
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-lg font-semibold">{format(day, 'd')}</div>
                  <div className="text-xs">{format(day, 'EEE')}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border text-center ${
                  selectedTime === time
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Booking Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
            <div className="flex mb-6">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Salon"
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
                <span>{format(selectedDate, 'EEEE, MMMM d')}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span>{selectedTime} - 25 mins</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-4 h-4 mr-2">👤</span>
                <span>{selectedProfData.name}</span>
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

            {/* Total */}
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹120</span>
              </div>
            </div>

            {/* Confirm */}
            <Link
              to="/review"
              className="w-full bg-black text-white py-3 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors block"
            >
              Confirm Appointment
            </Link>

            {/* Support Info */}
            <div className="mt-6 space-y-4 text-sm text-gray-600">
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

export default BookingPage;
