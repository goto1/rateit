import React from "react";
import PropTypes from "prop-types";

const List = ({ inset = false, className, children }) => {
  const classNames = `list-block ${inset ? "inset" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      <ul>
        {children}
      </ul>
    </div>
  );
};

List.propTypes = {
  inset: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default List;
