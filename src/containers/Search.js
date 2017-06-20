import React from "react";
import PersonListItem from "../components/PersonListItem";
import styled from "styled-components";
import {
  Page,
  Navbar,
  Searchbar,
  List,
  ListItem,
  ContentBlockTitle,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  GridRow,
  GridCol,
  Button
} from "framework7-react";

const people = [
  {
    id: "009404973009374595",
    name: "Randall Rivera",
    type: "Student",
    school: "NJIT",
    rating: 4.5,
    numOfRatings: 201
  },
  {
    id: "7456062367375738",
    name: "Renee Porter",
    type: "Professor",
    school: "NJIT",
    rating: 3,
    numOfRatings: 110
  },
  {
    id: "9766491935583002",
    name: "Lionel Ford",
    type: "Student",
    school: "Rutgers",
    rating: 2.5,
    numOfRatings: 30
  },
  {
    id: "6428626191061508",
    name: "Jonathon Sims",
    type: "Professor",
    school: "Rutgers",
    rating: 5,
    numOfRatings: 63
  }
];

const ChipCustom = styled(Chip)`
  margin: 7.5px 5px 0 0 !important;
  letter-spacing: 1.5px;
  background: #A09FA3 !important;
`;

const ContentBlockTitleCustom = styled(ContentBlockTitle)`
  margin: 15px 15px 0 15px !important;
  white-space: normal !important;
`;

const CardHeaderCustom = styled(CardHeader)`
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 500;
`;

const ButtonCustom = styled(Button)`
  color: ${props => props.color} !important;
  border: 2px solid ${props => props.color} !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
`;

const NoResults = () =>
  <List className="searchbar-not-found" style={{ marginTop: "30px" }}>
    <Card>
      <CardHeaderCustom>No Results Found</CardHeaderCustom>
      <CardContent style={{ textAlign: "center" }}>
        Can't find what you're looking for? You can rate {" "}
        <span style={{ fontWeight: "500" }}>professors</span> or {" "}
        <span style={{ fontWeight: "500" }}>classmates</span> down below!
      </CardContent>
    </Card>
    <GridRow style={{ margin: "20px 10px" }}>
      <GridCol>
        <ButtonCustom big color="#9595A8">Rate a professor</ButtonCustom>
      </GridCol>
      <GridCol>
        <ButtonCustom big color="#A8A284">Rate a classmate</ButtonCustom>
      </GridCol>
    </GridRow>
  </List>;

const SchoolLabels = ({ schools }) =>
  <ContentBlockTitleCustom>
    <span style={{ display: "block" }}>Searching In</span>
    {schools.map((name, idx) => <ChipCustom key={idx} text={name} />)}
  </ContentBlockTitleCustom>;

const Search = () =>
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

    <SchoolLabels schools={["NJIT", "Rutgers", "TCNJ"]} />

    <NoResults />

    <List className="searchbar-found" id="search-list" inset>
      {people.map(person => <PersonListItem key={person.id} {...person} />)}
    </List>
  </Page>;

export default Search;
