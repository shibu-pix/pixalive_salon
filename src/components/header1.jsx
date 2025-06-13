import React, { useEffect, useRef, useState } from "react";
import {
  FiUser,
  FiMenu,
} from "react-icons/fi";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaLocationArrow,
} from "react-icons/fa";
import {
  LayoutGrid,
  Scissors,
  SprayCan,
  Hand,
  Bath,
} from "lucide-react";

import img1 from "./../../assets/Home/hero1.jpg";
import img2 from "./../../assets/Home/hero2.jpg";
import img3 from "./../../assets/Home/hero3.jpg";
import img4 from "./../../assets/Home/hero4.jpg";
import img5 from "./../../assets/Home/hero5.jpg";
import img6 from "./../../assets/Home/hero6.jpg";
import img7 from "./../../assets/Home/hero7.jpg";
import img8 from "./../../assets/Home/hero8.jpg";
import img9 from "./../../assets/Home/hero9.jpg";
import img0 from "./../../assets/Home/hero0.jpg";
import Logo from "./../../assets/Home/logo.png";

const categories = [
  { name: "Hair & Styling", icon: <Scissors className="h-5 w-5" /> },
  { name: "Parlor", icon: <SprayCan className="h-5 w-5" /> },
  { name: "Nail Salon", icon: <Hand className="h-5 w-5" /> },
  { name: "Spa", icon: <Bath className="h-5 w-5" /> },
];

const venues = [
  {
    name: "Bodycraft Salon & Spa",
    address: "36 Pinnacle, Jawahar Colony, Jubilee Hills",
    image: "https://via.placeholder.com/50x50.png?text=Img",
  },
  {
    name: "Bodycraft Salon & Spa",
    address: "36 Pinnacle, Jawahar Colony, Jubilee Hills",
    image: "https://via.placeholder.com/50x50.png?text=Img",
  },
];

const HeroSection = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img0];
  const rotations = ["-5deg", "-3deg", "-2deg", "-1deg", "0deg", "0deg", "1deg", "2deg", "3deg", "5deg"];

  const [showTimeOptions, setShowTimeOptions] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [activeLabel, setActiveLabel] = useState("Any Time");
  const [selectedLocation, setSelectedLocation] = useState("Current location");

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Any Date");

  const popupRef = useRef(null);

  const togglePopup = (type) => {
    setShowTimeOptions(type === "time");
    setShowDatePopup(type === "date");
    setShowLocationDropdown(type === "location");
    setShowSidebar(type === "sidebar");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowTimeOptions(false);
        setShowDatePopup(false);
        setShowLocationDropdown(false);
        setShowSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const timeOptions = ["9.00 am", "10.00 am", "11.00 am", "12.00 pm", "1.00 pm", "2.00 pm"];
  const timeLabels = ["Any Time", "Morning", "Afternoon", "Evening"];
  const suggestedLocations = ["HSR Layout", "Koramangala", "BTM Layout", "Electronic City Phase 1", "Electronic City Phase 2"];

  const today = new Date();

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfWeek = (month, year) => new Date(year, month, 1).getDay();
  const isSameDay = (d1, d2) =>
    d1 && d2 && d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const handleFilterClick = (label) => {
    setActiveFilter(label);
    if (label === "Today") setSelectedDate(today);
    else if (label === "Tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow);
    } else setSelectedDate(null);
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(month, year);
    const startDay = getStartDayOfWeek(month, year);
    const daysArray = Array(startDay).fill(null).concat(
      Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1))
    );
    return Array.from({ length: Math.ceil(daysArray.length / 7) }, (_, i) =>
      daysArray.slice(i * 7, i * 7 + 7)
    );
  };

  return (
    <div className="min-h-screen bg-white font-lufga relative">
      <header className="flex justify-between items-center px-6 py-4">
        <img src={Logo} alt="Logo" className="w-8 h-8 object-contain bg-black" />
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-sm cursor-pointer hover:underline">Log in</span>
          <FiMenu size={24} />
          <FiUser size={24} />
        </div>
      </header>

      <div className="flex justify-center items-end gap-3 px-6 py-6 overflow-x-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-28 h-36 rounded-md overflow-hidden shadow-md"
            style={{ transform: `rotate(${rotations[index]})` }}
          >
            <img src={src} alt={`img-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="text-center px-4 mt-10">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
          Book local beauty and<br />wellness services
        </h1>
      </div>

      <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2 mx-auto mt-10 w-fit shadow-sm overflow-x-auto bg-white max-w-full">
        <button onClick={() => togglePopup("sidebar")} className="flex items-center gap-2 px-4 text-sm text-gray-700">
          <FaSearch className="text-black" />
          All Treatments and Venues
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => togglePopup("location")} className="flex items-center gap-2 px-4 text-sm text-gray-700">
          <FaMapMarkerAlt className="text-black" />
          {selectedLocation}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => togglePopup("date")} className="flex items-center gap-2 px-4 text-sm text-gray-700">
          <FaCalendarAlt className="text-black" />
          {activeFilter}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => togglePopup("time")} className="flex items-center gap-2 px-4 text-sm text-gray-700">
          <FaClock className="text-black" />
          {activeLabel}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button className="bg-black text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800">
          Search
        </button>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-50 w-full max-w-md" ref={popupRef}>
        {showSidebar && (
          <div className="bg-white p-4 rounded-xl shadow space-y-6 max-w-sm mx-auto">
            <button className="flex items-center gap-3 w-full">
              <div className="p-2 border rounded-md"><LayoutGrid className="h-5 w-5 text-gray-700" /></div>
              <span className="text-sm font-medium text-gray-800">All Treatments</span>
            </button>
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-900">Categories</h2>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <button key={idx} className="flex items-center gap-3 w-full">
                    <div className="p-2 border rounded-md">{cat.icon}</div>
                    <span className="text-sm font-medium text-gray-800">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-900">Venues</h2>
              <div className="space-y-4">
                {venues.map((venue, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <img src={venue.image} alt={venue.name} className="w-12 h-12 rounded-md object-cover" />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-800 leading-tight">{venue.name}</p>
                      <p className="text-gray-500 text-xs">{venue.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {showLocationDropdown && (
          <div className="bg-white p-4 border rounded-xl shadow mt-2">
            <h3 className="font-medium text-gray-700 mb-3">Suggested Destination</h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              <li onClick={() => setSelectedLocation("Current location")} className="flex items-center gap-2 cursor-pointer font-semibold">
                <FaLocationArrow /> Current Location
              </li>
              {suggestedLocations.map((loc, i) => (
                <li key={i} onClick={() => setSelectedLocation(loc)} className="flex items-center gap-2 hover:text-black cursor-pointer">
                  <FaMapMarkerAlt /> {loc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showTimeOptions && (
          <div className="bg-white p-4 border rounded-xl shadow mt-2">
            <div className="flex gap-2 mb-3">
              {timeLabels.map(label => (
                <button
                  key={label}
                  onClick={() => {
                    setActiveLabel(label);
                    if (label === "Any Time") {
                      setFromTime(""); setToTime("");
                    }
                  }}
                  className={`px-3 py-1 rounded-full border text-sm ${activeLabel === label ? "bg-black text-white" : "bg-white text-gray-700"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <select value={fromTime} onChange={(e) => setFromTime(e.target.value)} className="w-1/2 border rounded px-2 py-1 text-sm">
                <option value="">From</option>
                {timeOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
              </select>
              <select value={toTime} onChange={(e) => setToTime(e.target.value)} className="w-1/2 border rounded px-2 py-1 text-sm">
                <option value="">To</option>
                {timeOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        )}

        {showDatePopup && (
          <div className="bg-white p-4 border rounded-xl shadow mt-2">
            <div className="flex gap-2 mb-4">
              {["Any Date", "Today", "Tomorrow"].map(label => (
                <button
                  key={label}
                  onClick={() => handleFilterClick(label)}
                  className={`px-3 py-1 rounded-full text-sm border ${activeFilter === label ? "bg-black text-white" : "bg-white text-gray-700"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center mb-3">
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}><FaChevronLeft /></button>
              <span>{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</span>
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}><FaChevronRight /></button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day}>{day}</div>)}
            </div>
            {renderCalendar().map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-2 mb-1">
                {week.map((date, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer
                      ${date ? isSameDay(date, selectedDate) ? "bg-black text-white" : "hover:bg-gray-200" : ""}`}
                    onClick={() => date && setSelectedDate(date)}
                  >
                    {date ? date.getDate() : ""}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
