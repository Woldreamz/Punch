import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.svg";
import DarkLogo from "../assets/dark-logo.svg";

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

const Footer = () => {
  return (
    <section className="relative bottom-0 min-h-screen text-[#202229] footer-gradient slanted-top py-20">
      <div className="section px-8 pb-5">
        <div className="w-full slanted-footer bg-[#525AA0] flex flex-col items-center justify-center gap-4 mb-28 px-3 py-20 ">
          <h1 className="text-center text-white text-3xl md:text-5xl font-semibold max-w-[683px]">
            Need a job done, and done well? Get started
          </h1>

          <div className="bg-black rounded-2xl p-5 mt-5">
            <img
              src={DarkLogo}
              alt="Upside Down"
              className="transform rotate-90 invert"
            />
          </div>
        </div>

        <div>
          <footer className="text-white">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-32">
              <aside className="max-w-[300px]">
                <img src={Logo} alt="Footer Logo" />
                <p className="pt-6">
                  We take complex hiring processes - and simplify them.
                  Connecting you to the world&apos;s highly qualified talent
                  pool.
                </p>

                <p className="mb-4 mt-6 text-sm">LINKS AND REDIRECTS</p>
                <div className="mt-4 md:mt-14">
                  <Link
                    to="/"
                    className="bg-gray-800 text-white hover:bg-yellow-500 border-none rounded-2xl mr-3 px-4 py-3"
                  >
                    Hire now
                  </Link>
                  <Link
                    to="/"
                    className="bg-gray-800 text-white hover:bg-yellow-500 border-none rounded-2xl mr-3 px-4 py-3"
                  >
                    Apply now
                  </Link>
                </div>
              </aside>

              <div className="max-w-[700px] flex flex-col md:justify-self-end">
                <p className="text-xl md:text-4xl font-bold mb-8 mt-12 md:mt-0">
                  Connecting the right people to the right businesses.
                </p>
                <div className="flex justify-between w-full gap-5">
                  {Links.map((link, index) => (
                    <nav key={index}>
                      <h2 className="mb-4 uppercase text-[12px] text-[#959595]">
                        {link.heading}
                      </h2>
                      {link.links.map((item, index) => (
                        <div key={index} className="mb-3">
                          <Link
                            to="/"
                            className="text-sm text-white relative group"
                          >
                            {item}
                            <span className="block h-0.5 bg-white absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
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
        <div className="section px-8 py-4 flex justify-between gap-6 text-white text-sm md:text-base font-medium">
          <p>All rights reserved by Zwilt</p>
          <div className="flex flex-wrap justify-end gap-2 md:gap-5 text-[#959595]">
            <Link to="/" className="link hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/" className="link hover:text-white transition-colors duration-300">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
