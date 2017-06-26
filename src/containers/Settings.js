import React from "react";
import { ContentBlockTitleCustom, ListItemCustom } from "../components/f7";
import { Page, Navbar, List } from "framework7-react";

const AccountSettings = () =>
  <div>
    <ContentBlockTitleCustom text="Account settings" />
    <List inset>
      <ListItemCustom
        icon="account_circle"
        link="/settings/general/"
        text="General"
      />
    </List>
  </div>;

const HelpAndSupport = () =>
  <div>
    <ContentBlockTitleCustom text="Help and support" />
    <List inset>
      <ListItemCustom icon="help" link="/settings/help/" text="Help Center" />
      <ListItemCustom
        icon="assignment"
        link="/settings/terms/"
        text="Terms & Policies"
      />
    </List>
  </div>;

const UserSettings = () =>
  <div>
    <List inset>
      <ListItemCustom
        icon="sentiment_very_satisfied"
        link="/profile/id/"
        text="Profile Page"
      />
      <ListItemCustom icon="exit_to_app" link="/signout/" text="Sign Out" />
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
