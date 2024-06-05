import React from "react";
import { Markets } from "../../lib/utils"; // Importing the Markets array from utils
import LeftSpace from "./LeftSpace"; // Importing LeftSpace component
import RightSpace from "./RightSpace"; // Importing RightSpace component
import DarkLogo from "../../assets/dark-logo.svg"; // Importing the dark logo image

// CenterSpace component definition
const CenterSpace = () => {
  return (
    <section className="w-full bg-[#EDEFFF] py-20 lg:py-40 slanted-border relative lg:bottom-5">
      {/* Main container with background color, padding, and other styles */}
      <div className="section px-8 text-[#202229]">
        {/* Container with padding and text color */}
        <h1 className="md:text-5xl text-3xl text-center font-bold mb-10 lg:mb-20 max-w-[900px] mx-auto">
          {/* Main heading with responsive text size, center alignment, bold font, margin, and max width */}
          Your one-stop marketplace for finding the talent your business needs.
        </h1>

        {/* Iterating over the Markets array and rendering market-specific content */}
        {Markets.map((market, index) => (
          <div
            key={index} // Unique key for each element in the list
            className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-10"
          >
            {/* Grid layout with responsive column span and gap */}
            <div className="lg:col-span-2 flex flex-col lg:justify-center lg:gap-16 gap-10">
              {/* LeftSpace component taking up 2 columns on large screens */}
              <LeftSpace markets={market.leftSpace} />
            </div>

            <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
              {/* RightSpace component taking up 4 columns on large screens */}
              <div className="max-w-[700px] w-full flex flex-col gap-5">
                <RightSpace markets={market.rightSpace} />
              </div>
            </div>
          </div>
        ))}

        {/* Bottom section with navigation and additional info */}
        <div className="flex items-center justify-between gap-2 lg:gap-20 md:text-[22px]">
          {/* Flex container for alignment and spacing */}
          <div className="flex items-center space-x-3 hover:bg-black hover:rounded-xl hover:text-white cursor-pointer">
            {/* Container with hover effects and cursor pointer */}
            <div className="bg-black p-4 rounded-xl hover:w-20">
              {/* Dark logo with hover effect */}
              <img src={DarkLogo} alt="Dark Logo" className="invert" />
            </div>
            <span className="font-semibold z-10 hover:text-white">
              Explore more
            </span>
          </div>
          <div className="md:absolute md:left-[46.5%] hover:font-semibold cursor-pointer">
            {/* Text with hover effect and cursor pointer */}
            <p>
              30 more <span className="text-[#202229CC]">to explore</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSpace; // Exporting the CenterSpace component