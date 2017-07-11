import React from "react";
import PropTypes from "prop-types";

const Icon = ({ material, className }) => {
  const classNames = className
    ? `material-icons icon ${className}`
    : `material-icons icon`;
  return (
    <i className={classNames}>
      {material}
    </i>
  );
};

Icon.propTypes = {
  material: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

export default Icon;
