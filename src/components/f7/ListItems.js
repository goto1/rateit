import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

// <ListItemCustom
//   icon='icon_name'
//   text='Google' />
export const ListItemCustom = ({ icon, text }) =>
  <li>
    <div className="item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">{text}</div>
    </div>
  </li>;

ListItemCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

// <ListItemLinkCustom
//   icon='icon_name'
//   link='example.com'
//   text='Google' />
export const ListItemLinkCustom = ({ icon, link, text }) =>
  <li>
    <a href={link} className="item-link item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">{text}</div>
    </a>
  </li>;

ListItemLinkCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
