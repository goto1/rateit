import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";

const ItemContent = styled.div`padding-right: 15px;`;

const ItemInner = styled.div`
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

const LinkItemContainer = ({ url, children }) =>
  <li>
    <a href={url}>
      <ItemContent className="item-content">
        <ItemInner className="item-inner">
          <Arrow material="keyboard_arrow_right" />
          {children}
        </ItemInner>
      </ItemContent>
    </a>
  </li>;

LinkItemContainer.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default LinkItemContainer;
