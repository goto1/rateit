import React from "react";
import ViewsLayoutF7 from "../layouts/ViewsLayoutF7";
import routes from "../routes";
import {
  Framework7App,
  Page,
  ContentBlock,
  ContentBlockTitle,
  List,
  ListItem
} from "framework7-react";

import "framework7/dist/css/framework7.ios.min.css";
import "framework7/dist/css/framework7.ios.colors.min.css";

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
    <ViewsLayoutF7>
      {children}
    </ViewsLayoutF7>
  </Framework7App>;

export default AppF7;
