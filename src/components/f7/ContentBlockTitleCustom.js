import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ContentBlockTitle } from "framework7-react";

const ContentBlockTitleWrapper = styled(ContentBlockTitle)`
  margin-top: 25px !important;
`;

// <ContentBlockTitleCustom
//   text='Description goes here...' />
const ContentBlockTitleCustom = ({ text, children }) =>
  <ContentBlockTitleWrapper>
    {text}
    {children !== undefined && children}
  </ContentBlockTitleWrapper>;

ContentBlockTitleCustom.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object
};

export default ContentBlockTitleCustom;
