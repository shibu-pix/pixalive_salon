import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 md:px-12 pt-16 pb-10 text-l">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Logo Icon */}
          <div className="w-6 h-6 bg-white text-black font-black text-xs flex items-center justify-center rounded-sm">
            P
          </div>

          {/* Tagline */}
          <p className="leading-relaxed text-l">
            From bold ideas to real-world tech—
            <br />
            Pixalive is where innovation comes alive.
          </p>
<br /><br />
          {/* Copyright */}
          <p className="text-xs text-gray-400 pt-6">
            © 2025 Pixalive Technology Services.<br/> All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between md:w-1/3">
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>contact@pixalivetech.com</p>
            <p className="mt-1">+91 87785 84566</p>

            <div className="flex gap-2 mt-3 items-start">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                Pixalive Salon Network Private Limited
                <br />
                Electronic City , Bengaluru
              </p>
            </div>
          </div>

          {/* Footer Links Bottom Right */}
          <div className=" justify-end space-x-32 text-xs text-gray-400">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
