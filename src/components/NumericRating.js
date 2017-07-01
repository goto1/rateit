import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";

const NumericRating = ({ rating, fontSize }) => {
  let color = "#A1BA37";

  if (rating <= 3) {
    color = "#DEB21C";
  }
  if (rating <= 2) {
    color = "#D91948";
  }

  return (
    <div style={{ letterSpacing: "2px", fontSize: `${fontSize}px` }}>
      <span
        style={{
          color: color,
          fontSize: `${fontSize + 3}px`,
          fontWeight: "500"
        }}
      >
        {rating}
      </span>/5
    </div>
  );
};

NumericRating.propTypes = {
  rating: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired
};

// const NumericRating = ({ rating, fontSize }) => {
//   let color = "#A1BA37";

//   if (rating <= 3) {
//     color = "#DEB21C";
//   }
//   if (rating <= 2) {
//     color = "#D91948";
//   }

//   return (
//     <div style={{ letterSpacing: "2px" }}>
//       <span style={{ color, fontSize, fontWeight: "500" }}>{rating}</span>/5
//     </div>
//   );
// };

// NumericRating.propTypes = {
//   rating: PropTypes.number.isRequired,
//   fontSize: PropTypes.string.isRequired
// };

export default NumericRating;
