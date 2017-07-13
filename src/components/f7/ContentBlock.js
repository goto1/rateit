import React from "react";
import PropTypes from "prop-types";

const ContentBlock = ({ inset = false, children }) => {
  const classNames = inset ? "content-block inset" : "content-block";
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

ContentBlock.propTypes = {
  inset: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default ContentBlock;
