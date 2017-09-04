import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContentBlockTitle } from "./f7";

const StyledContentBlockTitle = styled(ContentBlockTitle)`
  height: 16px;
`;

const Text = styled.div`
  position: absolute;
  width: 97.5%;
  will-change: transform, opacity;
  transition: all .75s ease-in-out;
  opacity: ${props => (props.show ? "1" : "0")};
  pointer-events: ${props => (props.show ? "auto" : "none")};
  transform: ${props => (props.show ? "translateX(0)" : "translateX(105%)")};
  color: ${props => (props.color ? props.color : "#6D6D72")};
`;

const InputLabel = ({ description, error, valid }) =>
  <StyledContentBlockTitle>
    <Text show={valid}>
      {description}
    </Text>
    <Text show={!valid} color="#FF0000">
      {error}
    </Text>
  </StyledContentBlockTitle>;

InputLabel.propTypes = {
  description: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired
};

export default InputLabel;
