import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "framework7-react";

const Wrapper = styled.li`
  .item-input {
    margin-left: 15px;
  }
`;

const FormInput = ({ icon, type, name, placeholder, onChange }) =>
  <Wrapper>
    <div className="item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-input">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  </Wrapper>;

FormInput.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInput;
