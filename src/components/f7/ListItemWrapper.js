import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

const ListItemWrapper = ({ icon, url, children }) =>
  <li>
    <a href={url} className="item-link item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">
        {children}
      </div>
    </a>
  </li>;

ListItemWrapper.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default ListItemWrapper;
