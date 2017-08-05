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
  placeholder,
  valid = true,
  onChange,
  onBlur
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
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
    </StyledItemContent>
  </li>;

Textarea.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func
};

export default Textarea;
