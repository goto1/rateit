import React from "react";
import PropTypes from "prop-types";

export const CardHeader = ({ className, children }) => {
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

export const CardContent = ({ className, children }) => {
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

export const CardFooter = ({ className, children }) => {
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
