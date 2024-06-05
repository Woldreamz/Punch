import React from "react"; 
import YellowLogo from "../assets/yellow-logo.svg"; 

// Array of FAQ questions
const faqsQuestion = [
  "I want to work part-time, is that possible",
  "How long are the average projects?",
  "How does the payment work?",
  "How much can I earn?",
];

// FreqAskQues component definition
const FreqAskQues = () => {
  return (
    <section className="relative text-[#202229] bg-[#F3F3F3] min-h-screen slanted-border mb-[-9rem] bottom-5 md:bottom-14 py-20 pb-[10rem]">
      {/* Main section container with background color, text color, minimum height, slanted border, margins, bottom offset, and padding */}
      <div className="section px-8">
        {/* Inner section container with padding */}
        <h1 className="md:text-5xl text-3xl font-bold lg:mb-20 mb-10 text-center">
          {/* Main heading with responsive text size, bold font, margin, and centered text */}
          Frequently asked questions
        </h1>

        <div className="flex flex-col">
          {/* Flex container for FAQ categories */}
          {["General", "Joining Process"].map((item, i) => (
            <div key={i}>
              {/* Mapping over FAQ categories */}
              {faqsQuestion.map((faq, i) => (
                <div key={i} className={"flex group"}>
                  {/* Flex container for each FAQ question with group class for hover effects */}
                  <div
                    className={`md:w-[20%] py-7 px-3 text-center border border-[#D6D6D6] group-hover:bg-[#E8E8E8] ${
                      i !== 0 && "border-r-0"
                    }`}
                  >
                    {/* Category title cell with padding, text center, border, and hover background color */}
                    {i === 0 && item}
                    {/* Only display the category title for the first question in the group */}
                  </div>
                  <div
                    className={`px-3 border border-[#D6D6D6] w-full py-7 text-center hover:bg-[#E8E8E8] cursor-pointer relative ${
                      i !== 0 && "border-l-0"
                    }`}
                  >
                    {/* Question cell with padding, border, width, text center, hover background color, cursor pointer, and relative positioning */}
                    <p className="text-base group-hover:font-bold">{faq}</p>
                    {/* Question text with base text size and bold font on hover */}
                    <img
                      src={YellowLogo}
                      alt="Yellow logo"
                      className={`absolute right-8 bottom-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}
                      /* Yellow logo image with absolute positioning, opacity transition, and visibility on hover */
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreqAskQues; 