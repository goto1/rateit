import React from "react";
import PropTypes from "prop-types";

const AccordionToggle = ({ className, children }) => {
  const classNames = `accordion-item-toggle ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

AccordionToggle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default AccordionToggle;
