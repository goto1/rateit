import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeUserFromBookmarksIfNeeded } from "../actions";
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

const StyledText = styled.div`
  font-size: 16px;
  padding: 15px;
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 25px;
  text-transform: uppercase;
`;

const UserList = type => {
  class _UserList extends React.Component {
    renderUsers = () => {
      const { auth, removeUserFromBookmarksIfNeeded } = this.props;

      return auth.info.bookmarks
        .filter(bookmark => bookmark.type === type)
        .map(user =>
          <UserCard
            key={user.id}
            removeUserFromBookmarks={removeUserFromBookmarksIfNeeded}
            {...user}
          />
        );
    };

    render() {
      const userList = this.renderUsers();
      const userType = `${capitalize(type)}s`;
      const text =
        userList.length > 0
          ? `Your saved ${userType}`
          : `You do not have any saved ${userType}`;

      return (
        <div>
          {userList.length > 0 &&
            <ContentBlockTitle>
              {text}
            </ContentBlockTitle>}
          <ContentBlockStyled>
            {userList.length > 0
              ? userList
              : <StyledText>
                  {text}
                </StyledText>}
          </ContentBlockStyled>
        </div>
      );
    }
  }

  _UserList.propTypes = {
    auth: PropTypes.object.isRequired,
    removeUserFromBookmarksIfNeeded: PropTypes.func.isRequired
  };

  return _UserList;
};

const mapDispatchToProps = dispatch => ({
  removeUserFromBookmarksIfNeeded: userId =>
    dispatch(removeUserFromBookmarksIfNeeded(userId))
});

const mapStateToProps = state => ({
  auth: state.auth
});

export const Professors = connect(mapStateToProps, mapDispatchToProps)(
  UserList("professor")
);
export const Students = connect(mapStateToProps, mapDispatchToProps)(
  UserList("student")
);

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
