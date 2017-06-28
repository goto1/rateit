import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

// <TextAreaCustom
//   icon="comment"
//   name="message"
//   placeholder="Your message here..."
//   onChange={e => console.log(e.target.name, e.target.value)}
// />
const TextAreaCustom = ({ icon, name, placeholder, onChange }) =>
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

TextAreaCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextAreaCustom;
