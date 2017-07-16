import React from "react";
import PropTypes from "prop-types";

const AccordionContent = ({ className, children }) => {
  const classNames = `accordion-item-content ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

AccordionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default AccordionContent;
