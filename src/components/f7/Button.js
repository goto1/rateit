import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const themePicker = (color, fill) => {
  const colors = {
    blue: "#057AFF",
    green: "#369947",
    red: "#C9302C",
    white: "#F1F1F5"
  };
  let theme = {
    background: "inherit",
    border: colors.blue,
    text: colors.blue
  };

  switch (color) {
    case "green":
      theme = fill
        ? { background: colors.green, border: colors.green, text: colors.white }
        : { ...theme, border: colors.green, text: colors.green };
      break;
    case "red":
      theme = fill
        ? {
            background: colors.red,
            border: colors.red,
            text: colors.white
          }
        : { ...theme, border: colors.red, text: colors.red };
      break;
    default:
      theme = fill
        ? {
            ...theme,
            background: colors.blue,
            text: colors.white
          }
        : theme;
  }
  return theme;
};

const Wrapper = styled.button`
  background-color: ${props => props.background} !important;
  border-color: ${props => props.border} !important;
  color: ${props => props.text} !important;
  opacity: ${props => (props.disabled ? ".65" : "1")};
  text-transform: uppercase;
  letter-spacing: .5px;
  width: 100%;
`;

const Button = ({
  type = "button",
  disabled = false,
  color,
  onClick,
  big,
  fill,
  className,
  children
}) => {
  const { background, border, text } = themePicker(color, fill);
  const classNames = `button ${big ? "button-big" : ""} ${className
    ? className
    : ""}`.trim();
  const props = omitBy(
    {
      background,
      border,
      text,
      type,
      disabled,
      onClick,
      className: classNames
    },
    isNil
  );

  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button", "menu"]),
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["green", "red"]),
  className: PropTypes.string,
  big: PropTypes.bool,
  fill: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
