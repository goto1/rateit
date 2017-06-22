import React from "react";
import people from "../dummy-data"; // To Be Deleted...
import PersonListItem from "../components/PersonListItem";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Buttons,
  Tabs,
  Tab,
  ContentBlock,
  ContentBlockTitle,
  List
} from "framework7-react";

const ContentBlockCustom = ({ children, title }) =>
  <ContentBlock style={{ padding: "0" }}>
    <ContentBlockTitle>{title.toUpperCase()}</ContentBlockTitle>
    {children}
  </ContentBlock>;

export const SavedProfessors = () =>
  <ContentBlockCustom title="Your saved professors">
    <List inset>
      {people.map(person => <PersonListItem key={person.id} {...person} />)}
    </List>
  </ContentBlockCustom>;

export const SavedStudents = () =>
  <ContentBlockCustom title="Your saved students">
    <List inset>
      {people.map(person => <PersonListItem key={person.id} {...person} />)}
    </List>
  </ContentBlockCustom>;

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
