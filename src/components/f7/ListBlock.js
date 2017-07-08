import React from "react";
import PropTypes from "prop-types";

const ListBlock = ({ children }) =>
  <div className="list-block">
    <ul>
      {children}
    </ul>
  </div>;

ListBlock.propTypes = {
  children: PropTypes.array.isRequired
};

export default ListBlock;
