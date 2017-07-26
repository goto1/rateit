import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ href, big, className, children }) => {
  const classNames = `button ${big ? "button-big" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <a href={href} className={classNames}>
      {children}
    </a>
  );
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  big: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default LinkButton;
