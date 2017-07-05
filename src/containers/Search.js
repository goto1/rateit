import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserListItem from "../components/UserListItem";
import { ContentBlockTitleWrapper } from "../components/f7";
import {
  Page,
  Navbar,
  Searchbar,
  List,
  Card,
  CardHeader,
  CardContent,
  GridRow,
  GridCol,
  Button
} from "framework7-react";

// DELETE WHEN DONE TESTING...
import * as API from "../utils/";

const ButtonWrapper = styled(Button)`
  color: ${props => props.color} !important;
  border: 2px solid ${props => props.color} !important;
  font-size: 11px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
`;

const NoResultsFoundContainer = styled.div`
  .list-block {
    margin-top: 30px;
  }
  .card-header {
    text-transform: uppercase;
    letter-spacing: 1.1px;
    font-weight: 500;
    text-align: center;
  }
  .card-header > span {
    display: inline-block;
    margin: 0 auto;
  }
  .card-content {
    text-align: center;
  }
  .card-content-inner > span {
    font-weight: 500 !important;
  }
  .row {
    margin: 20px 10px;
  }
`;

const NoResultsFound = () =>
  <NoResultsFoundContainer>
    <List className="searchbar-not-found">
      <Card>
        <CardHeader>
          <span>No Results Found</span>
        </CardHeader>
        <CardContent>
          Can't find what you're looking for? You can rate{" "}
          <span>professors</span> or <span>classmates</span> down below!
        </CardContent>
      </Card>
      <GridRow>
        <GridCol>
          <ButtonWrapper big color="#9595A8">
            Rate a professor
          </ButtonWrapper>
        </GridCol>
        <GridCol>
          <ButtonWrapper big color="#A8A284">
            Rate a classmate
          </ButtonWrapper>
        </GridCol>
      </GridRow>
    </List>
  </NoResultsFoundContainer>;

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
  <ContentBlockTitleWrapper>
    Showing results for
    <div>
      {schools.map(school =>
        <Chip key={school.id}>
          {school.abbreviation}
        </Chip>
      )}
    </div>
  </ContentBlockTitleWrapper>;

SchoolLabels.propTypes = {
  schools: PropTypes.array.isRequired
};

const ListContainer = styled(List)`
  margin-top: 25px !important;
`;

const UserList = ({ users }) =>
  <ListContainer className="searchbar-found" id="search-list" inset>
    {users.map(user => <UserListItem key={user.id} {...user} />)}
  </ListContainer>;

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

// DELETE THIS WHEN DONE TESTING
const allUsers = API.getUsers();
const currentUser = API.getUserDetails("UArjrbxWHX");

class Search extends Component {
  render() {
    const users = allUsers.map(user => API.getUserDetails(user.id));
    const userSchools = currentUser.schools;

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
        <NoResultsFound />
        <UserList users={users} />
      </Page>
    );
  }
}

export default Search;
