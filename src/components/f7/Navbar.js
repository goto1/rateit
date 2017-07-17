import React from "react";
import PropTypes from "prop-types";

export const NavLeft = ({ backLink, sliding = false, className }) => {
  const classNames = `left ${sliding ? "sliding" : ""} ${className
    ? className
    : ""} `.trim();
  return (
    <div className={classNames}>
      <a className="back link">
        <i className="icon icon-back" />
        <span>
          {backLink}
        </span>
      </a>
    </div>
  );
};

NavLeft.propTypes = {
  backLink: PropTypes.string.isRequired,
  sliding: PropTypes.bool,
  className: PropTypes.string
};

export const NavCenter = ({ sliding = false, className, children }) => {
  const classNames = `center ${sliding ? "sliding" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

NavCenter.propTypes = {
  sliding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const NavRight = ({ sliding = false, className, children }) => {
  const classNames = `right ${sliding ? "sliding" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

NavRight.propTypes = {
  sliding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Navbar = ({ className, children }) => {
  const classNames = `navbar ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      <div className="navbar-inner">
        {children}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Navbar;
