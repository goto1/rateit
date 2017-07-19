import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`margin-top: 25px !important;`;

const ContentBlockTitle = ({ className, children }) => {
  const classNames = `content-block-title ${className ? className : ""}`.trim();
  return (
    <Wrapper className={classNames}>
      {children}
    </Wrapper>
  );
};

ContentBlockTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ContentBlockTitle;
