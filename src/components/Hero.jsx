import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkLogo from "../assets/dark-logo.svg";
import Gif from "../assets/main-logo.gif";

const Hero = () => {
  const rolesIT = [
    "Python Developer",
    "Data Scientist",
    "Shopify Developer",
    "Shopify Developer",
    "Front End Developer",
    "Python Developer",
    "MERN Stack Developer",
    "Shopify Developer",
    "Full Stack Developer",
    "Full Stack Developer",
    "Python Developer",
    "Explore More",
  ];

  const rolesDesign = [
    "Graphic Designer",
    "UI/UX Designer",
    "Product Designer",
    "Motion Graphics Artist",
    "3D Animator",
    "Creative Director",
    "Brand Strategist",
    "Illustrator",
    "Art Director",
    "Explore More",
  ];

  const tabs = ["IT & Development", "Design & Creative"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const roles = activeTab === "IT & Development" ? rolesIT : rolesDesign;

  return (
    <section className="flex justify-center mt-20">
      <div className="w-full text-[#202229] flex flex-col items-center ">
        <h1 className="max-w-2xl md:text-5xl text-3xl font-bold text-center mb-8">
          Finding the right fit{" "}
          <img
            src={Gif}
            alt="Gif profile"
            className="inline-block w-12 align-middle"
          />{" "}
          has never been easier.
        </h1>
        <p className="text-center max-w-[569px] md:text-[21px] text-lg">
          With our rigorous pre-vetting process, you&apos;ll never have to worry
          about finding the ideal candidate ever again.
        </p>
        <div className="w-full relative flex md:h-[64px] max-w-[650px] md:max-w-[570px] my-10">
          <div className="md:text-base relative h-full font-semibold bg-white border-[1.5px] border-[#F0F0F0] border-r-0 rounded-2xl rounded-e-none py-3 pl-3 flex items-center text-nowrap left-2">
            Looking for
          </div>

          <input
            type="text"
            placeholder="design |"
            className="w-full h-full bg-white border-[1.5px] border-[#F0F0F0] border-l-0 rounded-e-none focus:outline-none pl-5 md:pl-3"
          />
          <button className="relative right-8 h-full bg-[#FFBE2E] border-none hover:bg-[#FFBE2E] md:w-[74px] w-[95px] md rounded-xl">

            <img src={DarkLogo} alt="Dark Logo" className="relative left-4" />
          </button>
        </div>

        <div className="w-full max-w-[920px] bg-[#F8F8F8] rounded-2xl flex flex-col items-center p-5">
          <div role="tablist" className="max-w-[400px] mb-5 cursor-pointer">
            {tabs.map((tab, index) => (
              <a
                key={index}
                role="tab"
                onClick={() => setActiveTab(tab)}
                className={`h-[44px] tab rounded-2xl text-[#202229] md:font-semibold font-medium p-3 pr-5 text-[10px] md:text-sm ${
                  activeTab === tab
                    ? "tab-active bg-[#C7F4C2]"
                    : "bg-[#D2D2D2] bg-opacity-15"
                } ${index === 1 ? "right-2 rounded-l-none" : "z-10"}`}
              >
                {tab}
              </a>
            ))}
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 lg:pl-20">
            {roles.map((role, index) => (
              <Link
                to="/"
                key={index}
                className="text-[#959595] text-left text-sm md:text-base hover:font-bold hover:text-[#202229] transition ease-in"
              >
                {role}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
