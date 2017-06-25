import React from "react";
import PropTypes from "prop-types";
import people from "../dummy-data"; // To Be Deleted...
import { ContentBlockTitleCustom } from "../components/f7";
import PersonOverviewCard from "../components/PersonOverviewCard";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tabs,
  Tab,
  ContentBlock
} from "framework7-react";

const ContentBlockCustom = ({ title, children }) =>
  <div>
    <ContentBlockTitleCustom text={title} />
    <ContentBlock style={{ padding: "0" }}>
      {children}
    </ContentBlock>
  </div>;

ContentBlockCustom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export const SavedProfessors = () =>
  <ContentBlockCustom title="Your saved professors">
    {people.map(person => <PersonOverviewCard key={person.id} {...person} />)}
  </ContentBlockCustom>;

export const SavedStudents = () =>
  <ContentBlockCustom title="Your saved students">
    {people.map(person => <PersonOverviewCard key={person.id} {...person} />)}
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
