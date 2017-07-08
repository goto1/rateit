import React from "react";
import { ContentBlockTitleWrapper, ListItemWrapper } from "../components/f7";
import { Page, Navbar, List } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const AccountSettings = () =>
  <div>
    <ContentBlockTitleWrapper>Account settings</ContentBlockTitleWrapper>
    <List inset>
      <ListItemWrapper icon="account_circle" url="/settings/general">
        General
      </ListItemWrapper>
    </List>
  </div>;

const HelpAndSupport = () =>
  <div>
    <ContentBlockTitleWrapper>Help and support</ContentBlockTitleWrapper>
    <List inset>
      <ListItemWrapper icon="help" url="/settings/help/">
        Help Center
      </ListItemWrapper>
      <ListItemWrapper icon="assignment" url="/settings/help/">
        Terms & Policies
      </ListItemWrapper>
    </List>
  </div>;

const user = API.getUserDetails("UArjrbxWHX");

const UserSettings = () =>
  <div>
    <List inset>
      <ListItemWrapper
        icon="sentiment_very_satisfied"
        url={`/profile/${user.id}`}
      >
        Profile Page
      </ListItemWrapper>
      <ListItemWrapper icon="exit_to_app" url="/signout/">
        Sign Out
      </ListItemWrapper>
    </List>
  </div>;

const Settings = () =>
  <Page>
    <Navbar title="Settings" sliding />
    <AccountSettings />
    <HelpAndSupport />
    <UserSettings />
  </Page>;

export default Settings;
