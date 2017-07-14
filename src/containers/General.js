import React from "react";
import {
  ContentBlock,
  ContentBlockTitle,
  FormInput,
  SmartSelect,
  ListBlock,
  Button
} from "../components/f7";
import { Page, Navbar, List } from "framework7-react";

// DELETE AFTER TESTING
import * as API from "../utils";

const AccountInformation = () =>
  <div>
    <ContentBlockTitle>Account information</ContentBlockTitle>
    <List form inset>
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
          searchbarPlaceholder="Search for a school..."
          onChange={event =>
            console.log(event.target.options, event.target.name)}
        />
        <SmartSelect
          name="majors"
          options={majors}
          selected={selectedMajors}
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
    <List form inset>
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
    <Navbar title="General" backLink="Back" sliding />
    <AccountInformation />
    <SchoolInformation />
    <PasswordReset />
    <ContentBlock>
      <Button type="success" disabled={true} onClick={e => e.preventDefault()}>
        Submit Changes
      </Button>
    </ContentBlock>
  </Page>;

export default General;
