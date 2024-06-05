import React from "react"; 
import { Link } from "react-router-dom"; 
import Logo from "../assets/logo2.svg"; 
import DarkLogo from "../assets/dark-logo.svg";

// Array of links and their headings
const Links = [
  {
    heading: "Platform",
    links: ["Find Work", "Find Talent", "Categories", "About Us"],
  },
  {
    heading: "Categories",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  {
    heading: "Help",
    links: ["FAQ's", "Contact Us"],
  },
  {
    heading: "Get in Touch @",
    links: ["Instagram", "LinkedIn", "Twitter"],
  },
];

// Footer component definition
const Footer = () => {
  return (
    <section className="relative bottom-0 min-h-screen text-[#202229] footer-gradient slanted-top py-20">
      {/* Main section container with gradient background, text color, minimum height, slanted top border, and padding */}
      <div className="section px-8 pb-5">
        {/* Inner section container with padding */}
        <div className="w-full slanted-footer bg-[#525AA0] flex flex-col items-center justify-center gap-4 mb-28 px-3 py-20">
          {/* Slanted footer container with background color, flex layout, padding, and margin */}
          <h1 className="text-center text-white text-3xl md:text-5xl font-semibold max-w-[683px]">
            {/* Main heading with text color, responsive text size, bold font, centered text, and max width */}
            Need a job done, and done well? Get started
          </h1>

          <div className="bg-black rounded-2xl p-5 mt-5">
            {/* Dark logo container with background color, rounded corners, padding, and margin */}
            <img
              src={DarkLogo}
              alt="Upside Down"
              className="transform rotate-90 invert"
              /* Dark logo image with transformation and inversion */
            />
          </div>
        </div>

        <div>
          <footer className="text-white">
            {/* Footer container with text color */}
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-32">
              {/* Flex container for footer content with responsive layout */}
              <aside className="max-w-[300px]">
                {/* Sidebar with max width */}
                <img src={Logo} alt="Footer Logo" />
                {/* Footer logo image */}
                <p className="pt-6 text-indigo-50 text-sm py-4">
                  {/* Description paragraph with padding top */}
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world&apos;s highly qualified talent
                  pool.
                </p>

                <p className="mb-4 mt-6 text-sm">LINKS AND REDIRECTS</p>
                {/* Subtitle with margin */}
                <div className="grow shrink basis-0">
                  {/* Link buttons container with margin */}
                  <Link
                    to="/"
                    className="grow shrink basis-0 self-stretch justify-center items-center inline-flex bg-gray-800 text-indigo-50 hover:bg-yellow-500 border-none rounded-2xl mr-3 px-9 py-4 text-sm font-medium leading-3"
                  >
                    Hire now
                  </Link>
                  <Link
                    to="/"
                    className="grow shrink basis-0 self-stretch justify-center items-center inline-flex bg-gray-800 text-indigo-50 hover:bg-yellow-500 border-none rounded-2xl mr-3 px-9 py-4 text-sm font-medium leading-3"
                  >
                    Apply now
                  </Link>
                </div>
              </aside>

              <div className="max-w-[700px] flex flex-col md:justify-self-end">
                {/* Main footer links container with max width and flex layout */}
                <p className="text-xl md:text-4xl font-bold mb-8 mt-12 md:mt-0">
                  {/* Subtitle with responsive text size, bold font, and margin */}
                  Connecting the right people to the right businesses.
                </p>
                <div className="flex justify-between w-full gap-5 py-9">
                  {/* Links container with flex layout and gap */}
                  {Links.map((link, index) => (
                    <nav key={index}>
                      {/* Navigation container for each link group */}
                      <h2 className="mb-4 uppercase text-[12px] text-[#959595]">
                        {/* Link group heading with text color and uppercase */}
                        {link.heading}
                      </h2>
                      {link.links.map((item, index) => (
                        <div key={index} className="mb-3">
                          {/* Link item container with margin */}
                          <Link
                            to="/"
                            className="text-sm text-white relative group"
                          >
                            {/* Link with text size, color, and group class */}
                            {item}
                            <span className="block h-0.5 bg-white absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            {/* Hover effect for link */}
                          </Link>
                        </div>
                      ))}
                    </nav>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="w-full absolute bottom-0 border-t border-[#a0a3b13b]">
        {/* Bottom footer bar with full width, absolute positioning, bottom alignment, and border */}
        <div className="section px-8 py-4 flex justify-between gap-6 text-white text-sm md:text-base font-medium">
          {/* Inner bottom footer bar container with padding, flex layout, text color, size, and font weight */}
          <p>All rights reserved by Zwilt</p>
          {/* Copyright text */}
          <div className="flex flex-wrap justify-end gap-2 md:gap-5 text-[#959595]">
            {/* Links container with flex layout and gap */}
            <Link to="/" className="link hover:text-white transition-colors duration-300">
              {/* Privacy policy link with hover effect */}
              Privacy Policy
            </Link>
            <Link to="/" className="link hover:text-white transition-colors duration-300">
              {/* Terms and conditions link with hover effect */}
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer; 
