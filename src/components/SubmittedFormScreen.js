import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContentBlock, Button } from "./f7";

const StyledContentBlock = styled(ContentBlock)`
  margin: 0;
  height: 97.5%;
  position: relative;
  margin: 0 !important;
`;

const SubmissionMessage = styled.div`
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 40%;
  width: 90%;
`;

const StyledButton = styled(Button)`
  width: 90%;
  position: absolute !important;
  bottom: 15px;
`;

const SubmittedFormScreen = ({ buttonName, onClick, children }) =>
  <StyledContentBlock>
    <SubmissionMessage>
      {children}
    </SubmissionMessage>
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
