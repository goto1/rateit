import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserListItem from "../components/UserListItem";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  ContentBlock,
  ContentBlockTitle,
  GridCol,
  GridRow,
  List
} from "../components/f7";
import { Page, Navbar, Searchbar } from "framework7-react";

// DELETE WHEN DONE TESTING...
import * as API from "../utils/";

const StyledButton = styled(Button)`
  color: ${props => props.color} !important;
  border: 2px solid ${props => props.color} !important;
  font-size: 9px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
`;

const StyledCard = styled(Card)`
  margin: 30px 0 !important;
`;

const StyledCardHeader = styled(CardHeader)`
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 500;
  justify-content: center !important;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
  span { font-weight: 500 !important; }
`;

const NoResults = () =>
  <ContentBlock className="searchbar-not-found">
    <StyledCard>
      <StyledCardHeader>No Results Found</StyledCardHeader>
      <StyledCardContent>
        Can't find what you're looking for? You can rate <span>professors</span>{" "}
        or <span>classmates</span> down below!
      </StyledCardContent>
    </StyledCard>
    <GridRow>
      <GridCol>
        <StyledButton color="#9595A8" big>
          Rate a professor
        </StyledButton>
      </GridCol>
      <GridCol>
        <StyledButton color="#A8A284" big>
          Rate a classmate
        </StyledButton>
      </GridCol>
    </GridRow>
  </ContentBlock>;

const ChipWrapper = styled.span`
  margin: 7.5px 5px 0 0 !important;
  letter-spacing: 1.5px;
  background: #808080 !important;
`;

const Chip = ({ children }) =>
  <ChipWrapper className="chip">
    <span className="chip-label">
      {children}
    </span>
  </ChipWrapper>;

Chip.propTypes = {
  children: PropTypes.string.isRequired
};

const SchoolLabels = ({ schools }) =>
  <ContentBlockTitle>
    Showing results for
    <div>
      {schools.map(school =>
        <Chip key={school.id}>
          {school.abbreviation}
        </Chip>
      )}
    </div>
  </ContentBlockTitle>;

SchoolLabels.propTypes = {
  schools: PropTypes.array.isRequired
};

// DELETE THIS WHEN DONE TESTING
const allUsers = API.getUsers();
const currentUser = API.getUserDetails("UArjrbxWHX");
// DELETE THIS WHEN DONE TESTING

const StyledList = styled(List)`
  margin-top: 25px !important;
`;

class Search extends Component {
  renderUserList = () =>
    this.users.map(user => <UserListItem key={user.id} {...user} />);

  render() {
    this.users = allUsers.map(user => API.getUserDetails(user.id));

    console.log(<StyledList id="search-list" className="searchbar-found" />);

    const userSchools = currentUser.schools;
    const userList = this.renderUserList();
    return (
      <Page>
        <Navbar title="RateIt" sliding />
        <Searchbar
          cancelLink="Cancel"
          placeholder="Search professors and students"
          clearButton={true}
          searchList="#search-list"
          searchIn=".username"
          onSearchbarSearch={() => console.log("onSearchbarSearch")}
          onSearchbarEnable={() => console.log("onSearchbarEnable")}
          onSearchbarDisable={() => console.log("onSearchbarDisable")}
          onSearchbarClear={() => console.log("onSearchbarClear")}
        />
        <SchoolLabels schools={userSchools} />
        <NoResults />
        <StyledList id="search-list" className="searchbar-found" inset>
          {userList}
        </StyledList>
      </Page>
    );
  }
}

export default Search;
