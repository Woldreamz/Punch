import React, { useState } from "react";
import TheJourney from "./TheJourney";
import PlayIconDark from "../assets/play.svg";
import PlayIconWhite from "../assets/play-white.svg";

const Comprehensive = () => {
  const [openItem, setOpenItem] = useState(null);


  const toggleHandler = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

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
      <div className="max-w-[635px] py-20">
        <h1 className="md:text-5xl text-3xl font-bold mb-5">
          How we ensure you&apos;re in good hands.
        </h1>
        <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC] mb-5">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>

        {screeningList.map((list) => (
          <div
            key={list.id}
            className={`bg-white border border-[#F0F0F0] mb-4 p-4 ${
              openItem === list.id ? "shadow-lg" : ""
            }`}
          >
            <div
              onClick={() => toggleHandler(list.id)}
              className="cursor-pointer flex items-center justify-between"
            >
              <div className="text-xl font-medium flex items-center gap-4">
                <div
                  className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${
                    openItem === list.id ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
                  }`}
                >
                  <img
                    src={openItem === list.id ? PlayIconWhite : PlayIconDark}
                    alt="play icon"
                  />
                </div>
                <p className="text-base">
                  <span className="font-semibold">Step {list.id}: </span>
                  {list.title}
                </p>
              </div>
            </div>
            {openItem === list.id && (
              <div className="mt-4 text-base text-[#1E1515CC]">
                <p>{list.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div>
        <TheJourney />
      </div>
    </section>
  );
};

export default Comprehensive;
