import React from "react";
import PropTypes from "prop-types";

const ContentBlock = ({ inset = false, className, children }) => {
  const classNames = `content-block ${inset ? "inset" : ""} ${className
    ? className
    : ""}`;
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

ContentBlock.propTypes = {
  inset: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ContentBlock;
