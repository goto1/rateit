import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

const TextArea = ({ icon, name, placeholder, onChange }) =>
  <li className="align-top">
    <div className="item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">
        <div className="item-input">
          <textarea placeholder={placeholder} name={name} onChange={onChange} />
        </div>
      </div>
    </div>
  </li>;

TextArea.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextArea;