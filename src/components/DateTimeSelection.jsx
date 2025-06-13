import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const DateTimeSelection = () => {
  const [selectedDate, setSelectedDate] = useState(11);
  const [selectedTime, setSelectedTime] = useState('10:00 pm');

  const dates = [
    { date: 11, day: 'Wed' },
    { date: 12, day: 'Thurs' },
    { date: 13, day: 'Fri' },
    { date: 14, day: 'Sat' },
    { date: 15, day: 'Sun' },
    { date: 16, day: 'Mon' },
    { date: 17, day: 'Tue' }
  ];

  const timeSlots = [
    '9:00 am', '10:00 pm', '11:00 am', '12:00 pm',
    '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm',
    '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
      
      {/* Premachandra location */}
      <div className="flex items-center space-x-2 mb-6 text-sm text-gray-600">
        <Calendar size={16} />
        <span>Premachandra</span>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft size={16} />
        </button>
        <h3 className="font-semibold text-gray-900">June 2025</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {dates.map((dateInfo) => (
          <button
            key={dateInfo.date}
            onClick={() => setSelectedDate(dateInfo.date)}
            className={`p-3 rounded-lg text-center transition-all ${
              selectedDate === dateInfo.date
                ? 'bg-black text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="text-lg font-bold">{dateInfo.date}</div>
            <div className="text-xs">{dateInfo.day}</div>
          </button>
        ))}
      </div>

      {/* Time Selection */}
      <div className="grid grid-cols-2 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`p-3 rounded-lg text-sm font-medium transition-all ${
              selectedTime === time
                ? 'bg-black text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateTimeSelection;