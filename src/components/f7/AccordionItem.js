import React from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ className, children }) => {
  const classNames = `accordion-item ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

AccordionItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default AccordionItem;
