import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/";
import {
  ContentBlockTitle,
  ListItem,
  List,
  Navbar,
  NavCenter
} from "../components/f7";
import { Page } from "framework7-react";

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

const UserSettings = ({ user, logout }) =>
  <div>
    <List inset>
      <ListItem icon="sentiment_very_satisfied" url={`/user/${user.id}`}>
        Profile Page
      </ListItem>
      <ListItem icon="exit_to_app" onClick={() => logout()}>
        Sign Out
      </ListItem>
    </List>
  </div>;

let Settings = ({ user, logout }) =>
  <Page>
    <Navbar>
      <NavCenter sliding>Settings</NavCenter>
    </Navbar>
    <AccountSettings />
    <HelpAndSupport />
    <UserSettings user={user} logout={logout} />
  </Page>;

const mapStateToProps = state => ({
  user: state.authUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

Settings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default Settings;
