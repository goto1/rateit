import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 97.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Preloader = styled.span`
  width: ${props => (props.size === "big" ? "44" : "22")}px !important;
  height: ${props => (props.size === "big" ? "44" : "22")}px !important;
  display: block;
`;

const PreloaderScreen = ({ className, size = "small" }) => {
  const classNames = `${className ? className : ""}`.trim();
  return (
    <Container className={classNames}>
      <Preloader className="preloader" size={size} />
    </Container>
  );
};

PreloaderScreen.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "big"])
};

export default PreloaderScreen;
