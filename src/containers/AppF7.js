import React from "react";
import ViewsLayoutF7 from "../layouts/ViewsLayoutF7";
import {
  Framework7App,
  Page,
  ContentBlock,
  ContentBlockTitle,
  List,
  ListItem,
  Navbar
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

const About = () =>
  <Page>
    <Navbar title="About" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, delectus,
      ut! Aspernatur incidunt laudantium nobis doloribus commodi non
      reprehenderit in doloremque animi repellendus aliquam voluptates, pariatur
      possimus, est blanditiis qui?
    </ContentBlock>
  </Page>;

const Form = () =>
  <Page>
    <Navbar title="Form" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
      laboriosam voluptate facilis libero sint voluptates reiciendis
      necessitatibus quis nostrum quidem, autem mollitia voluptatibus iure
      dolores, incidunt deserunt, omnis esse. Reiciendis.
    </ContentBlock>
  </Page>;

const routes = [
  {
    path: "/about/",
    component: About
  },
  {
    path: "/form/",
    component: Form
  }
];

const AppF7 = ({ children }) =>
  <Framework7App themeType="ios" routes={routes}>
    <ViewsLayoutF7>
      {children}
    </ViewsLayoutF7>
  </Framework7App>;

export default AppF7;
