import React from "react";
import PropTypes from "prop-types";

const NumberOfRatings = ({ numOfRatings }) =>
  <div style={{ color: "#8E8E93", fontSize: "13px", flexGrow: "1" }}>
    <span style={{ fontWeight: "600" }}>{numOfRatings}</span> ratings
  </div>;

NumberOfRatings.propTypes = {
  numOfRatings: PropTypes.number.isRequired
};

export default NumberOfRatings;
