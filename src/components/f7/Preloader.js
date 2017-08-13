import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.span`
  width: ${props => (props.size === "big" ? "44" : "22")}px;
  height: ${props => (props.size === "big" ? "44" : "22")}px;
`;

const Preloader = ({ className, size }) => {
  const classNames = `preloader ${className ? className : ""}`.trim();
  return <Wrapper className={classNames} size={size} />;
};

Preloader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "big"])
};

Preloader.defaultProps = {
  size: "small"
};

export default Preloader;
