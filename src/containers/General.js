import React from "react";
import { schools, currentUser, majors } from "../dummy-data";
import {
  ContentBlockTitleCustom,
  FormInputCustom,
  SmartSelectCustom,
  ListBlockCustom,
  SubmitButtonCustom
} from "../components/f7";
import { Page, Navbar, List } from "framework7-react";

const AccountInformation = () =>
  <div>
    <ContentBlockTitleCustom text="Account information" />
    <List form inset>
      <FormInputCustom
        icon="email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        onChange={event => console.log(event.target.value)}
      />
      <FormInputCustom
        icon="lock"
        type="password"
        name="password"
        placeholder="Current Password"
        onChange={event => console.log(event.target.value)}
      />
    </List>
  </div>;

const SchoolInformation = () => {
  const allSchools = schools;
  const userSchools = currentUser.schools.map(school => school.id);
  const allMajors = majors;
  const userMajors = currentUser.majors.map(major => major.id);

  return (
    <div>
      <ContentBlockTitleCustom text="School information" />
      <ListBlockCustom>
        <SmartSelectCustom
          name="schools"
          options={allSchools}
          selected={userSchools}
          searchbarPlaceholder="Search for a school..."
          onChange={event =>
            console.log(event.target.options, event.target.name)}
        />
        <SmartSelectCustom
          name="majors"
          options={allMajors}
          selected={userMajors}
          searchbarPlaceholder="Search for a major..."
          onChange={event =>
            console.log(event.target.options, event.target.name)}
        />
      </ListBlockCustom>
    </div>
  );
};

const PasswordReset = () =>
  <div>
    <ContentBlockTitleCustom text="Password Reset" />
    <List form inset>
      <FormInputCustom
        icon="lock"
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        onChange={event => console.log(event.target.value)}
      />
      <FormInputCustom
        icon="lock_outline"
        type="password"
        name="newPassword"
        placeholder="New Password"
        onChange={event => console.log(event.target.value)}
      />
      <FormInputCustom
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
    <SubmitButtonCustom
      text="Submit changes"
      disabled={false}
      onClick={e => {
        e.preventDefault();
      }}
    />
  </Page>;

export default General;
