import React from "react";
import styled from "styled-components";
import { ContentBlockTitle } from "framework7-react";

const ContentBlockTitleCustom = ({ children }) =>
  <ContentBlockTitle style={{ marginTop: "25px", whiteSpace: "normal" }}>
    {children}
  </ContentBlockTitle>;

export default ContentBlockTitleCustom;
