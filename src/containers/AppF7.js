import React from "react";
import styled from "styled-components";
import routes from "../routes";
import {
  Framework7App,
  Toolbar,
  Pages,
  Link,
  Icon,
  View,
  Views,
  Navbar,
  NavCenter
} from "framework7-react";

import "framework7/dist/css/framework7.ios.min.css";
import "framework7/dist/css/framework7.ios.colors.min.css";

const IconCustom = styled(Icon)`
  font-size: 23px;
  padding-top: 5px;
`;
const LinkText = styled.span`
  font-size: 12px;
`;

const ViewsF7 = (props, context) =>
  <Views>
    <View
      id="main-view"
      navbarThrough
      toolbarThrough
      dynamicNavbar={true}
      main
      url="/"
    >
      <Navbar>
        <NavCenter sliding>RateIt</NavCenter>
      </Navbar>
      <Pages>
        {props.children}
      </Pages>
      <Toolbar tabbar labels>
        <Link href="/">
          <IconCustom material="search" />
          <LinkText>Search</LinkText>
        </Link>
        <Link href="/saved/">
          <IconCustom material="bookmark" />
          <LinkText>Saved</LinkText>
        </Link>
        <Link href="/settings/">
          <IconCustom material="settings" />
          <LinkText>Settings</LinkText>
        </Link>
      </Toolbar>
    </View>
  </Views>;

const AppF7 = ({ children }) =>
  <Framework7App routes={routes}>
    <ViewsF7>
      {children}
    </ViewsF7>
  </Framework7App>;

export default AppF7;
