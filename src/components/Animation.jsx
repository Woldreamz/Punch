import React from "react";
import PropTypes from 'prop-types';
import { useInView } from "react-intersection-observer";
import "../index.css"; // Importing CSS styles

/**
 * Animation component that animates its children when they come into view.
 *
 * @param {string} className - Additional class names for the component.
 * @param {React.ReactNode} children - The content to be animated.
 * @param {string} animation - The animation class to be applied.
 */
const Animation = ({ className, children, animation }) => {
  // Using the useInView hook to detect when the component comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the inView only once
    threshold: 0.1, // 10% of the component should be visible to trigger the inView
  });

  return (
    <div
      ref={ref} // Setting the ref to the div element to track its visibility
      className={`${className} ${animation} ${inView ? "fade-in-visible" : ""}`} // Applying classes conditionally based on visibility
    >
      {children} {/* Rendering the children elements */}
    </div>
  );
};

// Defining prop types for the component
Animation.propTypes = {
  className: PropTypes.string.isRequired, // className is a required string
  children: PropTypes.node.isRequired, // children is a required node (any renderable content)
  animation: PropTypes.string.isRequired, // animation is a required string
};

export default Animation; // Exporting the component as default
