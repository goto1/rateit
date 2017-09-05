import React from "react";
import PropTypes from "prop-types";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const Icon = ({ material, className, onClick }) => {
  const classNames = `material-icons icon ${className ? className : ""}`.trim();
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
