import React from "react";
import PropTypes from "prop-types";
import { ContentBlockTitle } from "framework7-react";

// <ContentBlockTitleCustom
//   text='Description goes here...' />
const ContentBlockTitleCustom = ({ text, children }) =>
  <ContentBlockTitle style={{ marginTop: "25px", whiteSpace: "normal" }}>
    {text}
    {children !== undefined && children}
  </ContentBlockTitle>;

ContentBlockTitleCustom.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.object
};

export default ContentBlockTitleCustom;
