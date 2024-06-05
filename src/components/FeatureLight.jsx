import React from "react"; // Importing React
import OnboardImg from "../assets/onboard.svg"; // Importing onboard image
import Image2 from "../assets/Chatbar.png"; // Importing chatbar image
import Image3 from "../assets/Tracking.png"; // Importing tracking image
import useEmblaCarousel from "embla-carousel-react"; // Importing embla carousel hook
import Autoplay from "embla-carousel-autoplay"; // Importing autoplay plugin for embla carousel

// Array of feature data
const FeatureLightData = [
  {
    title: "Onboard without the risk.",
    list: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    color: "#50589F",
    image: OnboardImg,
  },
  {
    title: "An open book.",
    list: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings",
    ],
    color: "#FFBE2E",
    image: Image2,
  },
  {
    title: "Stay in the loop.",
    list: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    color: "#C7F4C2",
    image: Image3,
  },
];

// FeatureLight component definition
const FeatureLight = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", draggable: false }, // Embla carousel settings
    [Autoplay({ delay: 3000 })] // Adding autoplay plugin with 3-second delay
  );

  return (
    <section className="gradient-bg text-[#202229] md:min-h-screen slanted-border lg:flex py-20">
      {/* Main section container with gradient background, text color, minimum height, slanted border, flex layout, and padding */}
      <div className="section px-8 flex flex-col lg:flex-row lg:mt-0 w-full overflow-hidden">
        {/* Inner container with padding, flex layout, full width, and overflow hidden */}
        <div className="flex-1 lg:w-1/2 flex flex-col justify-center lg:pr-8">
          {/* Left side container with flex layout, responsive width, and padding right on large screens */}
          <div className="max-w-[380px] mb-8 lg:mb-0">
            {/* Content wrapper with max width and margin */}
            <h1 className="md:text-5xl text-3xl font-bold mb-8">
              {/* Main heading with responsive text size, bold font, and margin */}
              Why choose Zwilt?
            </h1>
            <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
              {/* Subheading with responsive text size, line height, color, and margin */}
              We take complex hiring processes - and simplify them. Connecting
              you to the world&apos;s highly qualified talent pool.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 lg:flex lg:items-center lg:justify-center scrollbar-hide">
          {/* Right side container with flex layout, responsive width, and custom scrollbar hiding */}
          <div className="embla" ref={emblaRef}>
            {/* Embla carousel container */}
            <div className="embla__container flex">
              {/* Embla carousel inner container with flex layout */}
              {FeatureLightData.map((feature, index) => (
                <div
                  key={index} // Unique key for each feature
                  className="embla__slide flex-none p-4 lg:p-10 rounded-[20px] bg-white flex flex-col lg:flex-row items-center justify-between shadow-lg"
                  style={{ minWidth: "100%", maxWidth: "100%" }}
                >
                  {/* Slide container with padding, rounded corners, background color, flex layout, and shadow */}
                  <div className="lg:max-w-[750px] w-full mb-4 lg:mb-0">
                    {/* Content wrapper with responsive max width, full width, and margin */}
                    <p className="md:text-4xl text-xl font-bold mb-8">
                      {/* Feature title with responsive text size, bold font, and margin */}
                      {feature.title}
                    </p>
                    <div className="mb-8">
                      {/* Feature list container with margin */}
                      {feature.list.map((each, idx) => (
                        <div
                          key={idx} // Unique key for each list item
                          className="flex items-center gap-3 mb-2 text-base"
                        >
                          {/* List item container with flex layout, gap, margin, and text size */}
                          <div
                            className="w-[18px] h-[7px] rounded-[21px]"
                            style={{ backgroundColor: feature.color }}
                          ></div>
                          {/* Color bar with dynamic background color */}
                          <span>{each}</span>
                          {/* List item text */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {/* Image container with no shrinking */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="md:w-[520px] md:h-[520px] w-[300px] h-[300px]"
                    />
                    {/* Feature image with responsive width and height */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureLight; 
