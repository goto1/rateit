import React from "react";
import PropTypes from "prop-types";

const PersonRole = ({ type, school, maxLength }) =>
  <div style={{ color: "rgb(0,0,0)", fontSize: "14px" }}>
    {type} at{" "}
    {school.length > +maxLength
      ? `${school.slice(0, +maxLength - 2)}..`
      : school}
  </div>;

PersonRole.propTypes = {
  type: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired
};

export default PersonRole;
