import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for type-checking

// RightSpace component definition
const RightSpace = ({ markets }) => {
  // Check if markets prop is not provided or is undefined
  if (!markets) {
    return <div>Loading...</div>; // Return a loading message or handle it in another way
  }

  return (
    <div className="bg-white rounded-lg p-7">
      {/* Main container with background color, rounded corners, and padding */}
      <p className="mb-5 font-semibold">{markets.title}</p>
      {/* Display the title of the markets */}
      <div className="flex items-start gap-1 w-full overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        {/* Container for the list of market items with horizontal scroll on small screens */}
        {markets.markets.map((market, index) => (
          <div
            key={index} // Unique key for each element in the list
            className="flex-shrink-0 flex flex-col flex-wrap gap-1 items-center min-w-[95px] sm:min-w-[105px]"
          >
            {/* Market item container with responsive minimum width */}
            <div className="w-[76px] h-[76px] lg:w-[86px] lg:h-[86px] rounded-full flex items-center justify-center bg-[#F6F6F6] hover:scale-125 cursor-pointer">
              {/* Icon container with background color, rounded shape, hover effect, and cursor pointer */}
              <img src={market.icon} alt={market.text} />
            </div>
            <p className="text-sm max-w-[50px] text-center">{market.text}</p>
            {/* Display market text with small font size and centered alignment */}
          </div>
        ))}
      </div>
    </div>
  );
};

// Prop type definitions for the RightSpace component
RightSpace.propTypes = {
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

// Default props in case markets prop is not provided
RightSpace.defaultProps = {
  markets: {
    title: "Default Title", // Default title
    markets: [], // Default empty array for markets
  },
};

export default RightSpace; // Exporting the RightSpace component