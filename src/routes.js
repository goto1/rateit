import React from "react";
import PersonListItem from "./components/PersonListItem";
import {
  Page,
  Navbar,
  ContentBlock,
  Searchbar,
  List,
  ListItem
} from "framework7-react";

const createPerson = ({ name, type, school, rating, numOfRatings }) => {
  const id = Math.random().toString().slice(2);

  return {
    id,
    name,
    type,
    school,
    rating,
    numOfRatings,
    link: `/person/${id}`
  };
};

const people = [
  createPerson({
    name: "Randall Rivera",
    type: "Student",
    school: "NJIT",
    rating: 4.5,
    numOfRatings: 201
  }),
  createPerson({
    name: "Renee Porter",
    type: "Professor",
    school: "NJIT",
    rating: 3,
    numOfRatings: 110
  }),
  createPerson({
    name: "Lionel Ford",
    type: "Student",
    school: "Rutgers",
    rating: 2.5,
    numOfRatings: 30
  }),
  createPerson({
    name: "Jonathon Sims",
    type: "Professor",
    school: "Rutgers",
    rating: 5,
    numOfRatings: 63
  })
];

export const Search = () =>
  <Page>
    <Navbar title="RateIt" sliding />
    <Searchbar
      cancelLink="Cancel"
      placeholder="Search professors and classmates"
      clearButton={true}
      searchList="#search-list"
      searchIn=".person-name"
      onSearchbarSearch={() => console.log("onSearchbarSearch")}
      onSearchbarEnable={() => console.log("onSearchbarEnable")}
      onSearchbarDisable={() => console.log("onSearchbarDisable")}
      onSearchbarClear={() => console.log("onSearchbarClear")}
    />
    <List className="searchbar-not-found">
      <ListItem title="Nothing found" />
    </List>
    <List className="searchbar-found" id="search-list" inset>
      {people.map(person => <PersonListItem key={person.id} {...person} />)}
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
