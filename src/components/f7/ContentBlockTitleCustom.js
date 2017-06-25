import React from "react";
import PropTypes from "prop-types";
import { ContentBlockTitle } from "framework7-react";

const ContentBlockTitleCustom = ({ text }) =>
  <ContentBlockTitle style={{ marginTop: "25px", whiteSpace: "normal" }}>
    {text}
  </ContentBlockTitle>;

ContentBlockTitleCustom.propTypes = {
  text: PropTypes.string.isRequired
};

export default ContentBlockTitleCustom;
