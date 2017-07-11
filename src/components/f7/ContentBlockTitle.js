import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`margin-top: 25px !important;`;

const ContentBlockTitle = ({ children }) =>
  <Wrapper className="content-block-title">
    {children}
  </Wrapper>;

ContentBlockTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentBlockTitle;
