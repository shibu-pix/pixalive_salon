import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import PixaliveLogo from "../../assets/Home/pixalive.png";
import { div } from "framer-motion/client";
import Logo from "./../../assets/Home/logo.png";

const Footer = () => {
  return (
    <div className="bg-black"> 
    <footer className="bg-black text-white px-4 md:px-12 pt-12 pb-10 text-l relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 relative z-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Logo Icon */}
          <img src={Logo} alt="Venum Logo" className="w-8 h-8 object-contain bg-black" />
          

          {/* Tagline */}
          <p className="leading-relaxed text-l">
            From bold ideas to real-world tech—
            <br />
            Pixalive is where innovation comes alive.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-400 pt-6">
            © 2025 Pixalive Technology Services.
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between md:w-1/3">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>contact@pixalivetech.com</p>
            <p className="mt-1">+91 87785 84566</p>

            {/* Address */}
            <div className="flex gap-2 mt-3 items-start">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Pixalive Salon Network Private Limited
                <br />
                Electronic City, Bengaluru
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-end space-x-58 mt-6 text-xs text-gray-400">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

    </footer>
    <div classname="px-0">
      {/* Background Pixalive Logo Image */}
      <img
        src={PixaliveLogo}
        alt="Pixalive Footer Logo"
        className="px-0 bottom-0 left-0 w-full object-cover z-0 opacity-100 pointer-events-none"
        
      />
</div>
    </div>
  );
};

export default Footer;
