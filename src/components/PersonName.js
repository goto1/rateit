import React from "react";
import PropTypes from "prop-types";

const PersonName = ({ type, name, maxNameLength }) =>
  <div
    style={{
      fontSize: "15px",
      fontWeight: "500",
      flexGrow: "1",
      color: type.toLowerCase() === "student" ? "#497B3C" : "#6967AE"
    }}
  >
    {name.length > +maxNameLength
      ? `${name.slice(0, +maxNameLength - 2)}..`
      : name}
  </div>;

PersonName.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  maxNameLength: PropTypes.number.isRequired
};

export default PersonName;
