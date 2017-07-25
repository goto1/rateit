import React from "react";
import PropTypes from "prop-types";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const List = ({ inset = false, id, className, children }) => {
  const classNames = `list-block ${inset ? "inset" : ""} ${className
    ? className
    : ""}`.trim();
  const props = omitBy({ className: classNames, id }, isNil);
  return (
    <div {...props}>
      <ul>
        {children}
      </ul>
    </div>
  );
};

List.propTypes = {
  inset: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default List;
