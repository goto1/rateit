import React from "react";
import routes from "../routes";
import {
  Framework7App,
  Page,
  Pages,
  ContentBlock,
  ContentBlockTitle,
  List,
  ListItem,
  View,
  Views,
  Navbar,
  NavCenter
} from "framework7-react";

import "framework7/dist/css/framework7.ios.min.css";
import "framework7/dist/css/framework7.ios.colors.min.css";

const ViewsF7 = (props, context) =>
  <Views>
    <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
      <Navbar>
        <NavCenter sliding>RateIt</NavCenter>
      </Navbar>
      <Pages>
        {props.children}
      </Pages>
    </View>
  </Views>;

export const Home = () =>
  <Page>
    <ContentBlockTitle>Welcome to my App</ContentBlockTitle>
    <ContentBlock inner>
      <p>
        Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent
        rhoncus enim ornare ipsum aliquet ultricies. Pellentesque
        sodales erat quis elementum sagittis.
      </p>
    </ContentBlock>
    <ContentBlockTitle>Navigation</ContentBlockTitle>
    <List>
      <ListItem link="/about/" title="About" />
      <ListItem link="/form/" title="Form" />
    </List>
  </Page>;

const AppF7 = ({ children }) =>
  <Framework7App themeType="ios" routes={routes}>
    <ViewsF7>
      {children}
    </ViewsF7>
  </Framework7App>;

export default AppF7;
