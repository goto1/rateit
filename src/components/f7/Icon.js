import React from "react";
import PropTypes from "prop-types";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const Icon = ({ material, className, onClick }) => {
  const classNames = className
    ? `material-icons icon ${className}`
    : `material-icons icon`;
  const props = omitBy(
    {
      className: classNames,
      onClick
    },
    isNil
  );
  return (
    <i {...props}>
      {material}
    </i>
  );
};

Icon.propTypes = {
  classNames: PropTypes.string,
  material: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Icon;
