import React from "react";
import {
  Page,
  Navbar,
  ContentBlock,
  Searchbar,
  List,
  ListItem
} from "framework7-react";

export const Search = () =>
  <Page>
    <Navbar title="RateIt" sliding />
    <Searchbar
      cancelLink="Cancel"
      placeholder="Search professors and classmates"
      clearButton={true}
      searchList="#search-list"
      onSearchbarSearch={() => console.log("onSearchbarSearch")}
      onSearchbarEnable={() => console.log("onSearchbarEnable")}
      onSearchbarDisable={() => console.log("onSearchbarDisable")}
      onSearchbarClear={() => console.log("onSearchbarClear")}
    />
    <List className="searchbar-not-found">
      <ListItem title="Nothing found" />
    </List>
    <List className="searchbar-found" id="search-list">
      {Array.apply(null, Array(100)).map((item, index) =>
        <ListItem key={index} title={`Item ${index + 1}`} />
      )}
    </List>
  </Page>;

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
