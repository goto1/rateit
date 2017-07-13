import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const colorPicker = type => {
  switch (type) {
    case "primary":
      return {
        bgColor: "#057AFF",
        borderColor: "#057AFF",
        textColor: "#F1F1F5"
      };
    case "success": {
      return {
        bgColor: "#369947",
        borderColor: "#369947",
        textColor: "#F1F1F5"
      };
    }
    default: {
      return {
        bgColor: "inherit",
        borderColor: "#057AFF",
        textColor: "#057AFF"
      };
    }
  }
};

const Wrapper = styled.a`
  background-color: ${props => props.bgColor} !important;
  border-color: ${props => props.borderColor} !important;
  color: ${props => props.textColor} !important;
  opacity: ${props => (props.disabled ? ".65" : "1")};
  text-transform: uppercase;
  letter-spacing: .5px;
`;

const Button = ({ type, disabled, onClick, children }) => {
  const { bgColor, borderColor, textColor } = colorPicker(type);
  return (
    <Wrapper
      href="#"
      onClick={onClick}
      className="button button-big"
      bgColor={bgColor}
      borderColor={borderColor}
      textColor={textColor}
      disabled={disabled}
    >
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["default", "primary", "success"]),
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Button;
