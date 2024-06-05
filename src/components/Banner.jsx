import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "../assets/svgIcons";
import activeIndicatorImage from "../assets/line.svg";

// Functional component definition for the Banner
const Banner = () => {
  // State hooks to manage menu open/close state and active menu item
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeElement, setActiveElement] = useState(null);

  // Function to toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`w-full bg-[#525AA0] rounded-2xl text-white shadow-xl flex justify-between p-3 relative ${
        menuOpen ? "h-auto" : "h-16"
      }`}
    >
      {/* Logo section */}
      <div>
        <a className="text-2xl">
          <svg
            width="112"
            height="28"
            viewBox="0 0 112 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG logo paths */}
            <path d="M0 24.6698V21.354L4.8675 15.3855H0.376839V10.0801H13.0323V13.396L8.16483 19.3645H13.4092V24.6698H0Z" fill="white" />
            <path d="M18.7276 24.6698L13.3262 10.0801H20.9886L22.6216 16.4797L24.8512 10.0801H27.7089L29.9385 16.4797L31.5715 10.0801H39.2339L33.8325 24.6698H27.8973L26.2958 20.1934L24.6628 24.6698H18.7276Z" fill="white" />
            <path d="M46.4255 6.06798C45.7137 6.70904 44.803 7.02957 43.6934 7.02957C42.5838 7.02957 41.6731 6.70904 40.9613 6.06798C40.2495 5.40481 39.8936 4.55375 39.8936 3.51479C39.8936 2.47582 40.2495 1.63581 40.9613 0.99475C41.6731 0.331583 42.5838 0 43.6934 0C44.803 0 45.7137 0.331583 46.4255 0.99475C47.1373 1.63581 47.4932 2.47582 47.4932 3.51479C47.4932 4.55375 47.1373 5.40481 46.4255 6.06798ZM40.1762 24.6698V10.0801H47.242V24.6698H40.1762Z" fill="white" />
            <path d="M55.6789 24.6698C53.69 24.6698 52.1198 24.0619 50.9684 22.8461C49.8379 21.6303 49.2726 19.9613 49.2726 17.8392V0.132634H56.3383V17.6403C56.3383 18.215 56.4535 18.6682 56.6838 18.9997C56.935 19.3092 57.2595 19.464 57.6573 19.464H58.2539L57.8143 24.6698H55.6789Z" fill="white" />
            <path d="M70.4379 19.4308L71.7254 23.6419C70.3227 24.703 68.8363 25.2335 67.2662 25.2335C65.0261 25.2335 63.257 24.5814 61.959 23.2772C60.682 21.9729 60.0434 20.1824 60.0434 17.9055V15.3855H58.2848V10.0801H60.6087L60.8599 4.97375H67.1091V10.0801H70.6577V15.3855H67.1091V17.9055C67.1091 18.5466 67.2348 19.055 67.486 19.4308C67.7581 19.7845 68.1245 19.9613 68.5851 19.9613C69.0875 19.9613 69.7051 19.7845 70.4379 19.4308Z" fill="white" />
            <path d="M96.0933 16.671C96.0933 21.7077 92.007 25.7908 86.9663 25.7908C81.9256 25.7908 77.8394 21.7077 77.8394 16.671C77.8394 11.6343 81.9256 7.55119 86.9663 7.55119C92.007 7.55119 96.0933 11.6343 96.0933 16.671Z" fill="#FFBE2E" />
            <path d="M93.7464 27.3542V5.98779L112 16.671L93.7464 27.3542Z" fill="#FFBE2E" />
          </svg>
        </a>
      </div>

      {/* Desktop menu section */}
      <div className="justify-center items-center hidden lg:flex">
        <ul className="flex flex-row space-x-7 cursor-pointer">
          {/* Menu items with active state indicator */}
          <li
            className={`${
              activeElement === "find-work" ? "active" : ""
            } cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => setActiveElement("find-work")}
          >
            Find Work
            {activeElement === "find-work" && (
              <img
                src={activeIndicatorImage}
                alt="active"
                className="ml-1 w-12"
              />
            )}
          </li>
          <li
            className={`${
              activeElement === "find-talent" ? "active" : ""
            } cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => setActiveElement("find-talent")}
          >
            Find Talent
            {activeElement === "find-talent" && (
              <img
                src={activeIndicatorImage}
                alt="active"
                className="ml-1 w-12"
              />
            )}
          </li>
          <li
            className={`${
              activeElement === "articles" ? "active" : ""
            } cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => setActiveElement("articles")}
          >
            Articles
            {activeElement === "articles" && (
              <img
                src={activeIndicatorImage}
                alt="active"
                className="ml-1 w-12"
              />
            )}
          </li>
          <li
            className={`${
              activeElement === "about-us" ? "active" : ""
            } cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => setActiveElement("about-us")}
          >
            About Us
            {activeElement === "about-us" && (
              <img
                src={activeIndicatorImage}
                alt="active"
                className="ml-1 w-12"
              />
            )}
          </li>
          <li
            className={`${
              activeElement === "contact-us" ? "active" : ""
            } cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full`}
            onClick={() => setActiveElement("contact-us")}
          >
            Contact Us
            {activeElement === "contact-us" && (
              <img
                src={activeIndicatorImage}
                alt="active"
                className="ml-1 w-12"
              />
            )}
          </li>
        </ul>
      </div>

      {/* Login and Join Now buttons for desktop */}
      <div className="flex items-end justify-end">
        <div className="hidden lg:block relative bottom-2 ">
          <Link to="/login" className="mr-4 hover:text-yellow-500">
            Login
          </Link>
          <Link
            to="/"
            className="bg-white text-[#202229] border-none rounded-2xl hover:bg-yellow-500 hover:text-white p-4"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile menu section */}
        <div className="relative lg:hidden z-10">
          <button onClick={toggleMenu} className="focus:outline-none">
            <MenuIcon />
          </button>

          {/* Mobile menu items */}
          {menuOpen && (
            <ul className="absolute right-0 mt-4 p-2 shadow bg-[#525AA0] w-auto rounded-lg z-50 flex flex-col space-x-5" style={{ top: '100%' }}>
              <div className="flex flex-row space-x-3">
                <li className="border-b border-gray-300">Work</li>
                <li className="border-b border-gray-300">Talent</li>
                <li className="border-b border-gray-300">Articles</li>
                <li className="border-b border-gray-300">About</li>
                <li className="border-b border-gray-300">Contact</li>
              </div>
              <li className="px-2">
                <Link
                  to="/"
                  className="bg-white text-[#202229] border-none rounded-2xl hover:bg-[#A285D0] hover:text-white p-2 w-full block text-center mt-2"
                >
                  Login
                </Link>
                <Link
                  to="/"
                  className="bg-white text-[#202229] border-none rounded-2xl hover:bg-[#A285D0] hover:text-white p-2 w-full block text-center mt-2"
                >
                  Join Now
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;