import React from "react";
import PropTypes from "prop-types";
import ContentBlockTitleCustom from "../layouts/ContentBlockTitleCustom";
import {
  Page,
  Navbar,
  ContentBlock,
  List,
  ListItem,
  Icon
} from "framework7-react";

const ListItemCustom = ({ icon, link, text }) =>
  <li>
    <a href={link} className="item-link item-content">
      <div className="item-media">
        <Icon material={icon} />
      </div>
      <div className="item-inner">{text}</div>
    </a>
  </li>;

ListItemCustom.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const AccountSettings = () =>
  <div>
    <ContentBlockTitleCustom>Account Settings</ContentBlockTitleCustom>
    <List inset>
      <ListItemCustom
        icon="account_circle"
        link="/settings/general"
        text="General"
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

const HelpAndSupport = () =>
  <div>
    <ContentBlockTitleCustom>Help and Support</ContentBlockTitleCustom>
    <List inset>
      <ListItemCustom icon="help" link="/settings/help/" text="Help Center" />
      <ListItemCustom
        icon="assignment"
        link="/settings/terms/"
        text="Terms & Policies"
      />
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
