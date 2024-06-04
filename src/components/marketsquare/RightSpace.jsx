import React from 'react';
import PropTypes from 'prop-types';

const RightSpace = ({ markets }) => {
  if (!markets) {
    return <div>Loading...</div>; // Or handle it in some other way
  }

  return (
    <div>
      <p className="text-lg md:text-2xl font-medium mb-4">{markets.title}</p>
      <div className="flex lg:justify-between flex-wrap gap-5 text-[#202229CC]">
        {markets.markets.map((market, index) => (
          <span key={index} className="flex items-center gap-2">
            <img src={market.icon} alt={market.text} />
            <span>{market.text}</span>
          </span>
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

RightSpace.defaultProps = {
  markets: {
    title: "Default Title",
    markets: [],
  },
};

export default RightSpace;
