import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/public/pixalive_technology_services_logo.jpeg" 
                alt="Pixalive Logo" 
                className="w-8 h-8 rounded bg-white p-1"
              />
            </div>
            <p className="text-gray-300 mb-8 max-w-md">
              From bold ideas to real-world tech—
              Pixalive is where innovation comes alive.
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Pixalive Salon Network Private Limited. All rights reserved.
            </p>
          </div>

          {/* Right side */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>contact@pixalivetech.com</p>
              <p>+91 87785 84566</p>
              <div className="mt-4">
                <p>Pixalive Salon Network Private Limited</p>
                <p>Electronic City, Bengaluru</p>
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-6">
              <button className="text-sm text-gray-400 hover:text-white">
                Terms of Use
              </button>
              <button className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Pixalive text */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white opacity-10">
            Pixalive
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;