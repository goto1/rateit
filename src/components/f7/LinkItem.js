import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "./Icon";

const Content = styled.div`padding-right: 15px;`;

const Inner = styled.div`
  flex-direction: column;
  padding-right: 0 !important;
  position: relative;
`;

const Arrow = styled(Icon)`
  color: #C7C7CC;
  position: absolute !important;
  right: 0;
  width: 17px;
`;

const LinkItem = ({ url, children }) =>
  <li>
    <a href={url}>
      <Content className="item-content">
        <Inner className="item-inner">
          <Arrow material="keyboard_arrow_right" />
          {children}
        </Inner>
      </Content>
    </a>
  </li>;

LinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default LinkItem;
