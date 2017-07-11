import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const InputWrapper = styled.div`margin-left: 15px;`;

const FormInput = ({ icon, type, name, placeholder, onChange }) =>
  <div className="item-content">
    <div className="item-media">
      <Icon material={icon} />
    </div>
    <InputWrapper className="item-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  </div>;

FormInput.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInput;
