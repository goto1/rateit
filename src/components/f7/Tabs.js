import React from "react";
import PropTypes from "prop-types";

const Tabs = ({ className, children }) => {
  const classNames = `tabs ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Tabs;
