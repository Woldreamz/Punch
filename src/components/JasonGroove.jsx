import React from "react";
import DquoteImg from "../assets/double-quote-img.svg";
import JasonImg from "../assets/jason-pic.svg";
import GrooveImg from "../assets/groove-img.svg";
import GrooveWhiteImg from "../assets/groove-white.svg";
import DarkLogo from "../assets/dark-logo.svg";


const JasonGroove = () => {
  return (
    <div className="min-h-screen w-full flex bg-[#202229] slanted-border relative bottom-5 lg:bottom-20 py-20">
      <div className="px-4">
        {/* Double quote image */}
        <img
          src={DquoteImg}
          alt="Double-Quote"
          className="absolute top-2 right-3"
        />

        {/* Content */}
        <div className="px-10 py-20 text-white justify-between w-full flex flex-col md:flex-row space-x-0 space-y-10 md:space-y-0 md:space-x-56">
          {/* Text content */}
          <div className="text-center md:text-start max-w-md flex flex-col gap-10 ml-10">
            {/* Heading */}
            <h1 className="md:text-5xl text-3xl font-bold">
              How it worked <br /> for Jason{" "}
              <img src={JasonImg} alt="Jason Picture" className="w-12 inline" />{" "}
              at <br />
              {/* Groove image */}
              <img
                src={GrooveImg}
                alt="Groove Purple"
                className="inline mt-2 w-36 md:w-auto"
              />
            </h1>
            {/* Testimonial */}
            <p className="md:text-xl text-[#c3c3c3] font-regular">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since.
            </p>

            {/* Logos */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              {/* Left dark logo */}
              <div className="bg-white hover:bg-[#AF7CFF] rounded-xl cursor-pointer transition ease-in">
                <img
                  src={DarkLogo}
                  alt="Left Dark Logo"
                  className="transform rotate-180 px-4 py-4 text-[#AF7CFF] hover:text-black w-12"
                />
              </div>
              {/* Right dark logo */}
              <div className="bg-white hover:bg-[#AF7CFF] rounded-xl cursor-pointer transition ease-out">
                <img
                  src={DarkLogo}
                  alt="Right Dark Logo"
                  className="px-4 py-4 text-[#AF7CFF] hover:text-black w-12"
                />
              </div>
            </div>
          </div>

          {/* Jason's information */}
          <div className="max-w-lg md:mt-24 mt-16 my-10">
            <div className="flex items-center gap-2 my-10">
              {/* Groove white image */}
              <div className="md:w-[102px] md:h-[90px] w-[78px] h-[78px] md:rounded-[40px] rounded-[28px] bg-[#AF7CFF] flex items-center justify-center mt-10">
                <img
                  src={GrooveWhiteImg}
                  alt="Groove white"
                  className="w-14 md:w-auto"
                />
              </div>
              {/* Jason's information */}
              <div>
                <p className="md:text-3xl text-xl font-bold mt-10">
                  Jason Makki
                </p>
                <p className="text-[#959595] ">Engineer at GROOVE</p>
                <p className="text-[#959595]">San Francisco</p>
              </div>
            </div>
            {/* Testimonial */}
            <p className="md:text-xl text-[#c3c3c3] w-full md:w-[450px] font-regular">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since. Zwilt enabled us to deliver on time
              and they&apos;ve been heavy hitters in our corner since. Zwilt
              enabled us to deliver on time and they&apos;ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JasonGroove; 
