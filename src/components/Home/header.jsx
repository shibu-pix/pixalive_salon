import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { FiUser, FiMenu } from "react-icons/fi";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaLocationArrow,
} from "react-icons/fa";
import { LayoutGrid, Scissors, SprayCan, Hand, Bath } from "lucide-react";

// Import your specific images
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

// Static data definitions (moved outside component for better performance)
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

const timeOptions = ["9.00 am", "10.00 am", "11.00 am", "12.00 pm", "1.00 pm", "2.00 pm"];
const timeLabels = ["Any Time", "Morning", "Afternoon", "Evening"];
const suggestedLocations = ["HSR Layout", "Koramangala", "BTM Layout", "Electronic City Phase 1", "Electronic City Phase 2"];

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img0];

const HeroSection = () => {
  // State management for popups and selections
  const [showPopup, setShowPopup] = useState(null); // 'time', 'date', 'location', 'sidebar'
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [activeTimeLabel, setActiveTimeLabel] = useState("Any Time");
  const [selectedLocation, setSelectedLocation] = useState("Current location");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeDateFilter, setActiveDateFilter] = useState("Any Date");

  const popupRef = useRef(null);

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const today = new Date();

  // Helper functions for calendar
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getStartDayOfWeek = (month, year) => new Date(year, month, 1).getDay();
  const isSameDay = (d1, d2) =>
    d1 && d2 && d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const handleDateFilterClick = (label) => {
    setActiveDateFilter(label);
    if (label === "Today") {
      setSelectedDate(today);
    } else if (label === "Tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow);
    } else {
      setSelectedDate(null);
    }
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
    <div className="pb-18"> {/* Removed font-lufga */}
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <img src={Logo} alt="Venum Logo" className="w-8 h-8 object-contain bg-black" />
        <div className="flex items-center gap-4 text-gray-600">
          <span className="text-sm cursor-pointer hover:underline">Log in</span>
          <FiMenu size={24} />
          <FiUser size={24} />
        </div>
      </header>

      {/* 3D Swiper Section - Panorama Design Model */}
      <section className=" py-10 overflow-hidden"> {/* Added overflow-hidden */}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          // Adjust slidesPerView for a wider, more panoramic view
          slidesPerView={5} // Show more slides at once
          spaceBetween={-50} // Negative space to overlap slightly and create a denser curve
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          coverflowEffect={{
            rotate: 0,   // Set to 0 for no rotation on the slides themselves
            stretch: 30, // Moderate stretch to create the arc
            depth: 150,  // Adjust depth for perspective
            modifier: 1, // Keep modifier at 1 for linear effect
            slideShadows: true, // Keep shadows for depth
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-7xl mx-auto mySwiperPanorama" // Increased max-width
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              // Adjusted dimensions for a wider, lower profile look like a banner
              className="!w-48 !h-36 sm:!w-64 sm:!h-48 md:!w-72 md:!h-56 lg:!w-80 lg:!h-64 flex justify-center items-center"
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover rounded-md shadow-md" // Slightly less rounded for a banner look
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Heading: "Book local beauty and wellness services" */}
      <div className="text-center px-4 mt-0">
        <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
          Book local beauty and
          <br />
          wellness services
        </h1>
      </div>


      {/* Filter Bar */}
      <div className="flex items-center justify-between border border-gray-300 rounded-full px-4 py-2  mx-auto mt-10 w-fit shadow-sm overflow-x-auto bg-white max-w-full md:max-w-4xl">
        <button onClick={() => setShowPopup("sidebar")} className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaSearch className="text-black" />
          All Treatments and Venues
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => setShowPopup("location")} className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaMapMarkerAlt className="text-black" />
          {selectedLocation}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => setShowPopup("date")} className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaCalendarAlt className="text-black" />
          {activeDateFilter}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button onClick={() => setShowPopup("time")} className="flex items-center gap-2 px-4 text-sm text-gray-700 whitespace-nowrap">
          <FaClock className="text-black" />
          {activeTimeLabel}
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button className="bg-black text-white rounded-full px-5 py-2 text-sm hover:bg-gray-800 whitespace-nowrap">
          Search
        </button>
      </div>

      {/* Popups */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-50 w-full max-w-md" ref={popupRef}>
        {showPopup === "sidebar" && (
          <div className="bg-white p-4 rounded-xl shadow-lg space-y-6 max-w-sm mx-auto">
            <button className="flex items-center gap-3 w-full p-2 border rounded-md hover:bg-gray-50 transition-colors">
              <LayoutGrid className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-800">All Treatments</span>
            </button>
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-900">Categories</h2>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <button key={idx} className="flex items-center gap-3 w-full p-2 border rounded-md hover:bg-gray-50 transition-colors">
                    <div className="p-1 border rounded-md">{cat.icon}</div>
                    <span className="text-sm font-medium text-gray-800">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-3 text-gray-900">Venues</h2>
              <div className="space-y-4">
                {venues.map((venue, i) => (
                  <div key={i} className="flex gap-3 items-start p-2 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
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

        {showPopup === "location" && (
          <div className="bg-white p-4 border rounded-xl shadow-lg mt-2">
            <h3 className="font-medium text-gray-700 mb-3">Suggested Destination</h3>
            <ul className="space-y-2 max-h-48 overflow-y-auto">
              <li onClick={() => { setSelectedLocation("Current location"); setShowPopup(null); }} className="flex items-center gap-2 cursor-pointer font-semibold p-2 rounded-md hover:bg-gray-100 transition-colors">
                <FaLocationArrow /> Current Location
              </li>
              {suggestedLocations.map((loc, i) => (
                <li key={i} onClick={() => { setSelectedLocation(loc); setShowPopup(null); }} className="flex items-center gap-2 hover:text-black cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-colors">
                  <FaMapMarkerAlt /> {loc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showPopup === "time" && (
          <div className="bg-white p-4 border rounded-xl shadow-lg mt-2">
            <div className="flex gap-2 mb-3 flex-wrap">
              {timeLabels.map(label => (
                <button
                  key={label}
                  onClick={() => {
                    setActiveTimeLabel(label);
                    if (label === "Any Time") {
                      setFromTime("");
                      setToTime("");
                    }
                  }}
                  className={`px-3 py-1 rounded-full border text-sm transition-colors ${activeTimeLabel === label ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <select value={fromTime} onChange={(e) => setFromTime(e.target.value)} className="w-1/2 border rounded px-2 py-1 text-sm focus:ring-black focus:border-black">
                <option value="">From</option>
                {timeOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
              </select>
              <select value={toTime} onChange={(e) => setToTime(e.target.value)} className="w-1/2 border rounded px-2 py-1 text-sm focus:ring-black focus:border-black">
                <option value="">To</option>
                {timeOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        )}

        {showPopup === "date" && (
          <div className="bg-white p-4 border rounded-xl shadow-lg mt-2">
            <div className="flex gap-2 mb-4 flex-wrap">
              {["Any Date", "Today", "Tomorrow"].map(label => (
                <button
                  key={label}
                  onClick={() => handleDateFilterClick(label)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${activeDateFilter === label ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center mb-3">
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))} className="p-2 rounded-full hover:bg-gray-100 transition-colors"><FaChevronLeft /></button>
              <span className="font-semibold text-gray-800">{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</span>
              <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))} className="p-2 rounded-full hover:bg-gray-100 transition-colors"><FaChevronRight /></button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => <div key={day}>{day}</div>)}
            </div>
            {renderCalendar().map((week, i) => (
              <div key={i} className="grid grid-cols-7 gap-2 mb-1">
                {week.map((date, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer transition-colors
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