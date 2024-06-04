import React from "react";
import PropTypes from "prop-types";

const RightSpace = ({ markets }) => {
  return (
    <div className="bg-white rounded-lg p-7">
      <p className="mb-5 font-semibold">{markets.title}</p>
      <div className="flex items-start gap-1 w-full overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        {markets.markets.map((market, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col flex-wrap gap-1 items-center min-w-[95px] sm:min-w-[105px]"
          >
            <div className="w-[76px] h-[76px] lg:w-[86px] lg:h-[86px] rounded-full flex items-center justify-center bg-[#F6F6F6] hover:scale-125 cursor-pointer">
              <img src={market.icon} alt={market.text} />
            </div>
            <p className="text-sm max-w-[50px] text-center">{market.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

RightSpace.propTypes = {
  markets: PropTypes.shape({
    title: PropTypes.string.isRequired,
    markets: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default RightSpace;
