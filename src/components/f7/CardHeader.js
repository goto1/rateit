import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ className, children }) => {
  const classNames = `card-header ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CardHeader;
