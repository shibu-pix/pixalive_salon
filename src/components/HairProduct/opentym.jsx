import React from "react";

const openingHours = [
  { day: "Sunday", time: "10:00 AM - 10:00 PM" },
  { day: "Monday", time: "10:00 AM - 10:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 10:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 10:00 PM" },
  { day: "Thursday", time: "10:00 AM - 10:00 PM", isToday: true },
  { day: "Friday", time: "10:00 AM - 10:00 PM" },
  { day: "Saturday", time: "10:00 AM - 10:00 PM" },
];

const OpeningTimes = () => {
  return (
    <div className=" px-4 md:px-12  pb-16">
      <h2 className="text-3xl md:text-3xl font-meadium mb-6">Opening times</h2>
      <ul className="space-y-3">
        {openingHours.map(({ day, time, isToday }) => (
          <li
            key={day}
            className={`flex items-center justify-between max-w-md ${
              isToday ? "font-bold text-black" : "text-gray-600"
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
              <span className={isToday ? "font-bold text-black" : ""}>
                {day}
              </span>
            </div>
            <span className={isToday ? "font-bold text-black" : ""}>{time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningTimes;
