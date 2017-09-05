import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContentBlock, Button } from "./f7";

const StyledContentBlock = styled(ContentBlock)`
  position: relative;
  height: 97.5%;
  margin: 0 !important;
`;

const Message = styled.div`
  position: absolute;
  top: 30%;
  font-size: 20px;
  text-align: center;
  width: 90%;
`;

const StyledButton = styled(Button)`
  position: absolute !important;
  bottom: 15px;
  width: 90%;
`;

const SubmittedFormScreen = ({ buttonName, onClick, children }) =>
  <StyledContentBlock>
    <Message>
      {children}
    </Message>
    <StyledButton type="button" onClick={onClick} big fill>
      {buttonName}
    </StyledButton>
  </StyledContentBlock>;

SubmittedFormScreen.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default SubmittedFormScreen;
