import React from "react";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  const classNames = className ? `card ${className}` : "card";
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;
