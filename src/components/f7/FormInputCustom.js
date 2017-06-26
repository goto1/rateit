import React from "react";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

// <FormInputCustom
//   icon='help'
//   type='text'
//   name='help'
//   placeholder='Questions'
//   onChange={(event) => { console.log(event.target.value); }} />
const FormInputCustom = ({ icon, type, name, placeholder, onChange }) =>
  <li>
    <div className="item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-input" style={{ marginLeft: "15px" }}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  </li>;

FormInputCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInputCustom;
