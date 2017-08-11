import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const StyledIcon = styled(Icon)`
  position: absolute !important;
  color: red;
  top: 35%;
  right: 5px;
`;

const StyledItemContent = styled.div.attrs({
  className: "item-content"
})`
  position: relative;
`;

const Textarea = ({
  icon,
  name,
  onBlur,
  onChange,
  placeholder,
  valid,
  value
}) =>
  <li className="align-top">
    <StyledItemContent>
      {!valid && <StyledIcon material="warning" />}
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">
        <div className="item-input">
          <textarea
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
          />
        </div>
      </div>
    </StyledItemContent>
  </li>;

Textarea.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  value: PropTypes.string
};

Textarea.defaultProps = {
  valid: false,
  value: ""
};

export default Textarea;
