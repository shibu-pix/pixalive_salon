import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <img 
              src="/pixalive_technology_services_logo.jpeg" 
              alt="Pixalive Technology Services" 
              className="h-8 w-8 object-contain mb-6"
            />
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              From bold ideas to real-world tech—<br />
              Pixalive is where innovation comes alive.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Pixalive Technology Services. All<br />
              rights reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">contact@pixalivetech.com</p>
              <p className="text-gray-300">+91 78741 84856</p>
              <div className="mt-4 space-y-1">
                <p className="text-gray-300">Pixalive Salon Network Private Limited</p>
                <p className="text-gray-300">Electronic City, Bangalore</p>
              </div>
            </div>

            <div className="flex md:justify-end space-x-6 mt-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-6xl font-bold text-white">
            Pixalive
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;