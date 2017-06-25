import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

// <ListItemLinkCustom
//   icon='icon_name'
//   link='example.com'
//   text='Google' />
const ListItemCustom = ({ icon, link, text }) =>
  <li>
    <a href={link} className="item-link item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">{text}</div>
    </a>
  </li>;

ListItemCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ListItemCustom;
