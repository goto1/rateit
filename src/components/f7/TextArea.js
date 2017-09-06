import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

// const StyledIcon = styled(Icon)`
//   position: absolute !important;
//   color: red;
//   top: 35%;
//   right: 5px;
// `;

const StyledIcon = styled(Icon)`
  transition: transform .75s ease-in-out;
  transform: ${props => (!props.valid ? "scale(1.15)" : "")};
  color: ${props => (!props.valid ? "#FF0000" : "#000")};
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
      <div className="item-media">
        <StyledIcon material={icon} valid={valid} />
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
