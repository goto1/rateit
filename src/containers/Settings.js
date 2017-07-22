import React from "react";
import {
  ContentBlockTitle,
  ListItem,
  List,
  Navbar,
  NavCenter
} from "../components/f7";
import { Page } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const AccountSettings = () =>
  <div>
    <ContentBlockTitle>Account settings</ContentBlockTitle>
    <List inset>
      <ListItem icon="account_circle" url="/settings/general">
        General
      </ListItem>
    </List>
  </div>;

const HelpAndSupport = () =>
  <div>
    <ContentBlockTitle>Help and support</ContentBlockTitle>
    <List inset>
      <ListItem icon="help" url="/settings/help/">
        Help Center
      </ListItem>
      <ListItem icon="assignment" url="/settings/terms/">
        Terms & Policies
      </ListItem>
    </List>
  </div>;

const user = API.getUserDetails("UArjrbxWHX");

const UserSettings = () =>
  <div>
    <List inset>
      <ListItem icon="sentiment_very_satisfied" url={`/profile/${user.id}`}>
        Profile Page
      </ListItem>
      <ListItem icon="exit_to_app" url="/signout/">
        Sign Out
      </ListItem>
    </List>
  </div>;

const Settings = () =>
  <Page>
    <Navbar>
      <NavCenter sliding>Settings</NavCenter>
    </Navbar>
    <AccountSettings />
    <HelpAndSupport />
    <UserSettings />
  </Page>;

export default Settings;
