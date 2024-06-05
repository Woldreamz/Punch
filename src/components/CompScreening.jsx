import React, { useState } from "react"; // Importing React and useState hook
import TheJourney from "./TheJourney"; // Importing TheJourney component
import PlayIconDark from "../assets/play.svg"; // Importing dark play icon
import PlayIconWhite from "../assets/play-white.svg"; // Importing white play icon

// Comprehensive component definition
const Comprehensive = () => {
  const [openItem, setOpenItem] = useState(null); // State to keep track of the currently open item

  // Handler to toggle the open item
  const toggleHandler = (id) => {
    setOpenItem((prev) => (prev === id ? null : id)); // If the same item is clicked, close it; otherwise, open the clicked item
  };

  // List of screening steps
  const screeningList = [
    {
      id: 1,
      title: "Resume Screening",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 2,
      title: "Video Interview",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 3,
      title: "Technical Evaluation",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 4,
      title: "Application Review",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 5,
      title: "Let's get to work",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
  ];

  return (
    <section className="section px-8 text-[#202229]">
      {/* Main container with padding and text color */}
      <div className="max-w-[635px] py-20">
        {/* Container with max width and padding */}
        <h1 className="md:text-5xl text-3xl font-bold mb-5">
          {/* Main heading with responsive text size, bold font, and margin */}
          How we ensure you&apos;re in good hands.
        </h1>
        <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC] mb-5">
          {/* Subheading with responsive text size, line height, color, and margin */}
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>

        {/* Iterating over the screeningList array and rendering each item */}
        {screeningList.map((list) => (
          <div
            key={list.id} // Unique key for each item
            className={`bg-white border border-[#F0F0F0] mb-4 p-4 ${
              openItem === list.id ? "shadow-lg" : ""
            }`}
          >
            {/* Container for each screening item with background color, border, margin, padding, and conditional shadow */}
            <div
              onClick={() => toggleHandler(list.id)}
              className="cursor-pointer flex items-center justify-between"
            >
              {/* Clickable header with flex layout, cursor pointer */}
              <div className="text-xl font-medium flex items-center gap-4">
                {/* Container for the icon and title */}
                <div
                  className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${
                    openItem === list.id ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
                  }`}
                >
                  {/* Icon container with conditional background color */}
                  <img
                    src={openItem === list.id ? PlayIconWhite : PlayIconDark}
                    alt="play icon"
                  />
                </div>
                <p className="text-base">
                  {/* Title with step number */}
                  <span className="font-semibold">Step {list.id}: </span>
                  {list.title}
                </p>
              </div>
            </div>
            {openItem === list.id && (
              <div className="mt-4 text-base text-[#1E1515CC]">
                {/* Description section shown only for the open item */}
                <p>{list.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        {/* Rendering TheJourney component */}
        <TheJourney />
      </div>
    </section>
  );
};

export default Comprehensive; // Exporting the Comprehensive component