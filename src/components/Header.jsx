import React from 'react';
import { Menu, User, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/public/pixalive_technology_services_logo.jpeg" 
              alt="Pixalive Logo" 
              className="w-8 h-8 rounded"
            />
            <span className="ml-2 text-sm font-medium text-gray-900">
              Pixalive Salon Network
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-sm text-gray-700 hover:text-gray-900">
              All Treatments and venues
            </button>
            <button className="text-sm text-gray-700 hover:text-gray-900">
              Current location
            </button>
            <button className="text-sm text-gray-700 hover:text-gray-900">
              Any date
            </button>
            <button className="text-sm text-gray-700 hover:text-gray-900">
              Any time
            </button>

            {/* ✅ Map View Link */}
            <Link
              to="/map"
              className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <MapPin className="w-4 h-4" />
              Map View
            </Link>

            {/* Search Button */}
            <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Menu className="w-5 h-5 text-gray-700" />
            <User className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
