import React from "react";
import ContentBlockTitleCustom from "../components/f7/ContentBlockTitleCustom";
import { ListItemLinkCustom } from "../components/f7/ListItems";
import { Page, Navbar, List } from "framework7-react";

const AccountSettings = () =>
  <div>
    <ContentBlockTitleCustom text="Account settings" />
    <List inset>
      <ListItemLinkCustom
        icon="account_circle"
        link="/settings/general"
        text="General"
      />
    </List>
  </div>;

const HelpAndSupport = () =>
  <div>
    <ContentBlockTitleCustom text="Help and support" />
    <List inset>
      <ListItemLinkCustom
        icon="help"
        link="/settings/help/"
        text="Help Center"
      />
      <ListItemLinkCustom
        icon="assignment"
        link="/settings/terms/"
        text="Terms & Policies"
      />
    </List>
  </div>;

const UserSettings = () =>
  <div>
    <List inset>
      <ListItemLinkCustom
        icon="sentiment_very_satisfied"
        link="/profile/id/"
        text="Profile Page"
      />
      <ListItemLinkCustom icon="exit_to_app" link="/signout/" text="Sign Out" />
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
