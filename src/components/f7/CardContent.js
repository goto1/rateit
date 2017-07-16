import React from "react";
import PropTypes from "prop-types";

const CardContent = ({ className, children }) => {
  const classNames = `card-content ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      <div className="card-content-inner">
        {children}
      </div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CardContent;
