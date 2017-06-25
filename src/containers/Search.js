import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PersonListItem from "../components/PersonListItem";
import people from "../dummy-data";
import {
  Page,
  Navbar,
  Searchbar,
  List,
  ContentBlockTitle,
  Chip,
  Card,
  CardHeader,
  CardContent,
  GridRow,
  GridCol,
  Button
} from "framework7-react";

const ChipCustom = styled(Chip)`
  margin: 7.5px 5px 0 0 !important;
  letter-spacing: 1.5px;
  background: #808080 !important;
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
      <CardHeaderCustom>
        <span style={{ display: "inline-block", margin: "0 auto" }}>
          No Results Found
        </span>
      </CardHeaderCustom>
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
    <span style={{ display: "block" }}>Showing results for</span>
    {schools.map((name, idx) => <ChipCustom key={idx} text={name} />)}
  </ContentBlockTitleCustom>;

SchoolLabels.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Search = () =>
  <Page>
    <Navbar title="RateIt" sliding />
    <Searchbar
      cancelLink="Cancel"
      placeholder="Search professors and students"
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
    <List
      className="searchbar-found"
      id="search-list"
      inset
      style={{ marginTop: "25px" }}
    >
      {people.map(person => <PersonListItem key={person.id} {...person} />)}
    </List>
  </Page>;

export default Search;
