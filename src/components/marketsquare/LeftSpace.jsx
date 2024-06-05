import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking

// LeftSpace component definition
const LeftSpace = ({ markets }) => {
  // Check if markets prop is not provided or is undefined
  if (!markets) {
    return <div>Loading...</div>; // Return a loading message or handle it in another way
  }

  return (
    <div>
      {/* Display the title of the markets */}
      <p className="text-lg md:text-2xl font-medium mb-4 font-['Switzer-Semibold']">{markets.title}</p>
      {/* Container for the list of market items */}
      <div className="flex lg:justify-between flex-wrap gap-5 text-[#202229CC] font-['Switzer-Semibold']">
        {/* Iterate over the markets array and display each market item */}
        {markets.markets.map((market, index) => (
          <span key={index} className="flex items-center gap-2">
            {/* Display market icon */}
            <img src={market.icon} alt={market.text} />
            {/* Display market text */}
            <span>{market.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Prop type definitions for the LeftSpace component
LeftSpace.propTypes = {
  markets: PropTypes.shape({
    title: PropTypes.string.isRequired, // Title is a required string
    markets: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired, // Icon is a required string (URL)
        text: PropTypes.string.isRequired, // Text is a required string
      })
    ).isRequired, // markets is a required array of objects with icon and text properties
  }).isRequired, // markets prop is required
};

export default LeftSpace; // Exporting the LeftSpace component
