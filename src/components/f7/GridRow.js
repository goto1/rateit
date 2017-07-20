import React from "react";
import PropTypes from "prop-types";

export const GridCol = ({ width, className, children }) => {
  const classNames = `col-${width ? width : "auto"} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

GridCol.propTypes = {
  width: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const GridRow = ({ noGutter = false, className, children }) => {
  const classNames = `row ${noGutter ? "no-gutter" : ""} ${className
    ? className
    : ""}`.trim();
  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

GridRow.propTypes = {
  noGutter: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default GridRow;
