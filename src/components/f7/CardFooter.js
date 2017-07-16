import React from "react";
import PropTypes from "prop-types";

const CardFooter = ({ className, children }) => {
  const classNames = `card-footer ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CardFooter;
