import React from "react";
import {
  Button,
  ContentBlock,
  ContentBlockTitle,
  FormInput,
  InputElement,
  List,
  ListBlock,
  NavCenter,
  NavLeft,
  Navbar,
  SmartSelect
} from "../components/f7";
import { Page } from "framework7-react";

// DELETE AFTER TESTING
import * as API from "../utils";

const AccountInformation = () =>
  <div>
    <ContentBlockTitle>Account information</ContentBlockTitle>
    <List inset={true}>
      <FormInput
        icon="email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        onChange={event => console.log(event.target.value)}
      />
      <FormInput
        icon="lock"
        type="password"
        name="password"
        placeholder="Current Password"
        onChange={event => console.log(event.target.value)}
      />
    </List>
  </div>;

const SchoolInformation = () => {
  const user = API.getUserDetails("UArjrbxWHX");
  const schools = API.getSchools();
  const majors = API.getMajors();
  const selectedSchools = user.schools.map(school => school.id);
  const selectedMajors = user.majors.map(major => major.id);

  return (
    <div>
      <ContentBlockTitle>School information</ContentBlockTitle>
      <ListBlock>
        <SmartSelect
          name="schools"
          options={schools}
          selected={selectedSchools}
          multiple={true}
          searchbarPlaceholder="Search for a school..."
          onChange={event =>
            console.log(event.target.options, event.target.name)}
        />
        <SmartSelect
          name="majors"
          options={majors}
          selected={selectedMajors}
          multiple={true}
          searchbarPlaceholder="Search for a major..."
          onChange={event =>
            console.log(event.target.options, event.target.name)}
        />
      </ListBlock>
    </div>
  );
};

const PasswordReset = () =>
  <div>
    <ContentBlockTitle>Password reset</ContentBlockTitle>
    <List inset={true}>
      <FormInput
        icon="lock"
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        onChange={event => console.log(event.target.value)}
      />
      <FormInput
        icon="lock_outline"
        type="password"
        name="newPassword"
        placeholder="New Password"
        onChange={event => console.log(event.target.value)}
      />
      <FormInput
        icon="lock_outline"
        type="password"
        name="newPasswordRepeated"
        placeholder="New Password Repeated"
        onChange={event => console.log(event.target.value)}
      />
    </List>
  </div>;

const General = () =>
  <Page>
    <Navbar>
      <NavLeft backLink="Back" sliding />
      <NavCenter sliding>General</NavCenter>
    </Navbar>
    <AccountInformation />
    <SchoolInformation />
    <PasswordReset />
    <ContentBlock>
      <Button color="green" onClick={() => "onClick"} big fill>
        Submit Changes
      </Button>
    </ContentBlock>
  </Page>;

export default General;
