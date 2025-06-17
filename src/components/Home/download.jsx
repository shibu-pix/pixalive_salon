import React from "react";
import PlayStoreIcon from "../../assets/Home/play.png";
import AppStoreIcon from "../../assets/Home/apple.png";
import AppScreenshot1 from "../../assets/Home/phone2.png"; // Taller image
import AppScreenshot2 from "../../assets/Home/phone1.png"; // Lower + smaller image

const DownloadAppSection = () => {
  return (
    <section className=" py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight  font-we">
            Download the <br /> Pixalive app
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-md">
            Discover & Book with Top Rated Salons & Spa Near you – Anytime,
            Anywhere
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-800 transition"
            >
              <img src={PlayStoreIcon} alt="Play Store" className="h-5 w-5" />
              <span className="text-sm font-medium">Play Store</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-800 transition"
            >
              <img src={AppStoreIcon} alt="App Store" className="h-5 w-5" />
              <span className="text-sm font-medium">App Store</span>
            </a>
          </div>
        </div>

       {/* Right Side - Screenshots */}
<div className="flex justify-center md:justify-end gap-4 relative">
  {/* Main Phone */}
  <img
    src={AppScreenshot1}
    alt="App Screenshot 1"
    className="w-42 md:w-46 lg:w-50 rounded-3xl shadow-xl border-1 z-10 "
  />

  {/* Slightly lower & smaller phone */}
  <img
    src={AppScreenshot2}
    alt="App Screenshot 2"
    className="w-42 md:w-46 lg:w-50 rounded-3xl shadow-xl border-2 relative top-6 md:top-24 h-auto"
  />
</div>

      </div>
    </section>
  );
};

export default DownloadAppSection;
