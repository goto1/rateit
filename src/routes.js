import React from "react";
import Search from "./containers/Search";
import { Page, Navbar, ContentBlock } from "framework7-react";

const Saved = () =>
  <Page>
    <Navbar title="Saved" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, delectus,
      ut! Aspernatur incidunt laudantium nobis doloribus commodi non
      reprehenderit in doloremque animi repellendus aliquam voluptates, pariatur
      possimus, est blanditiis qui?
    </ContentBlock>
  </Page>;

const Settings = () =>
  <Page>
    <Navbar title="Settings" backLink="Back" sliding />
    <ContentBlock inner>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
      laboriosam voluptate facilis libero sint voluptates reiciendis
      necessitatibus quis nostrum quidem, autem mollitia voluptatibus iure
      dolores, incidunt deserunt, omnis esse. Reiciendis.
    </ContentBlock>
  </Page>;

const createRoute = (path, component) => ({
  path: `/${path}/`,
  component
});

const routes = [
  createRoute("/", Search),
  createRoute("saved", Saved),
  createRoute("settings", Settings)
];

export default routes;
