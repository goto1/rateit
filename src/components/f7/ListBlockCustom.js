import React from "react";
import PropTypes from "prop-types";

const ListBlockCustom = ({ children }) =>
  <div className="list-block">
    <ul>{children}</ul>
  </div>;

ListBlockCustom.propTypes = {
  children: PropTypes.array.isRequired
};

export default ListBlockCustom;
