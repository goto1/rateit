import React from "react";
import PropTypes from "prop-types";

const getComponent = name => ({ className, children }) => {
  const classNames = `${name} ${className ? className : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

export const AccordionItem = getComponent("accordion-item");

AccordionItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const AccordionToggle = getComponent("accordion-item-toggle");

AccordionToggle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export const AccordionContent = getComponent("accordion-item-content");

AccordionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const Accordion = getComponent("accordion-list");

Accordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Accordion;
