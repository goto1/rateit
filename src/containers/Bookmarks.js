import React from "react";
import styled from "styled-components";
import UserCard from "../components/UserCard";
import { ContentBlock, ContentBlockTitle } from "../components/f7";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tabs,
  Tab
} from "framework7-react";
import * as API from "../utils/"; // DELETE WHEN DONE TESTING

const allUsers = API.getUsers();

const ContentBlockContainer = styled(ContentBlock)`
  padding: 0 !important;
`;

export const SavedProfessors = () => {
  const users = allUsers.map(user => API.getUserDetails(user.id));
  return (
    <div>
      <ContentBlockTitle>Your saved professors</ContentBlockTitle>
      <ContentBlockContainer>
        {users.map(user => <UserCard key={user.id} {...user} />)}
      </ContentBlockContainer>
    </div>
  );
};

export const SavedStudents = () => {
  const users = allUsers.map(user => API.getUserDetails(user.id));
  return (
    <div>
      <ContentBlockTitle>Your saved students</ContentBlockTitle>
      <ContentBlockContainer>
        {users.map(user => <UserCard key={user.id} {...user} />)}
      </ContentBlockContainer>
    </div>
  );
};

const Bookmarks = () =>
  <Page withSubnavbar>
    <Navbar title="Bookmarks" sliding>
      <Subnavbar sliding>
        <ButtonsSegmented>
          <Button routeTabLink="#professors" href="/bookmarks/">
            Professors
          </Button>
          <Button routeTabLink="#students" href="/bookmarks/students">
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
