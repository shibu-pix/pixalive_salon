import React from 'react';
import { Menu, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/pixalive_technology_services_logo.jpeg" 
            alt="Pixalive Technology Services" 
            className="h-8 w-8 object-contain"
          />
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
          <span>All Treatments and Venues</span>
          <span>Current location</span>
          <span>Any date</span>
          <span>Any time</span>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
            <Menu size={20} />
          </button>
          <div className="hidden lg:flex flex-col">
            <div className="w-4 h-0.5 bg-gray-400 mb-1"></div>
            <div className="w-4 h-0.5 bg-gray-400 mb-1"></div>
            <div className="w-4 h-0.5 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;