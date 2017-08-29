import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const ListItem = ({ icon, url, onClick, children }) => {
  return (
    <li>
      {typeof onClick === "undefined"
        ? <a href={url} className="item-link item-content">
            <div className="item-media">
              <Icon material={icon} />
            </div>
            <div className="item-inner">
              {children}
            </div>
          </a>
        : <div onClick={onClick} className="item-link item-content">
            <div className="item-media">
              <Icon material={icon} />
            </div>
            <div className="item-inner">
              {children}
            </div>
          </div>}
    </li>
  );
};

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  url: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ListItem;
