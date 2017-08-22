import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import capitalize from "lodash/capitalize";
import UserCard from "../components/UserCard";
import { ContentBlock, ContentBlockTitle } from "../components/f7";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tab,
  Tabs
} from "framework7-react";

const ContentBlockStyled = styled(ContentBlock)`
  padding: 0 !important;
`;

const UserList = userType =>
  class extends React.Component {
    renderUsers = () => {
      const { bookmarks } = this.props.currentUser;
      return bookmarks
        .filter(bookmark => bookmark.type === userType)
        .map(user => <UserCard key={user.id} {...user} />);
    };

    render() {
      const userList = this.renderUsers();
      const title = `Your saved ${capitalize(userType)}s`;
      return (
        <div>
          <ContentBlockTitle>
            {title}
          </ContentBlockTitle>
          <ContentBlockStyled>
            {userList}
          </ContentBlockStyled>
        </div>
      );
    }
  };

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const Professors = connect(mapStateToProps)(UserList("professor"));
export const Students = connect(mapStateToProps)(UserList("student"));

const Bookmarks = () =>
  <Page withSubnavbar>
    <Navbar title="Bookmarks" sliding>
      <Subnavbar sliding>
        <ButtonsSegmented>
          <Button routeTabLink="#professors" href="/bookmarks/">
            Professors
          </Button>
          <Button routeTabLink="#students" href="/bookmarks/students/">
            Students
          </Button>
        </ButtonsSegmented>
      </Subnavbar>
    </Navbar>

    <Tabs>
      <Tab routeTabId="professors" />
      <Tab routeTabId="students" />
    </Tabs>
  </Page>;

export default Bookmarks;
