import React from "react";
import ProfileOverviewTab from "./ProfileOverviewTab";
import ProfileRatingsTab from "./ProfileRatingsTab";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tabs,
  Tab
} from "framework7-react";

import people from "../dummy-data"; // TO BE DELETED!

export const Overview = () => <ProfileOverviewTab {...people[0]} />;
export const Ratings = () => <ProfileRatingsTab {...people[0]} />;

const Profile = () =>
  <Page withSubnavbar>
    <Navbar title="Student Details" backLink="Back" sliding>
      <Subnavbar sliding>
        <ButtonsSegmented>
          <Button routeTabLink="#overview" href="/profile/2929f929f2">
            Overview
          </Button>
          <Button routeTabLink="#ratings" href="/profile/29020020/ratings">
            Ratings
          </Button>
        </ButtonsSegmented>
      </Subnavbar>
    </Navbar>

    <Tabs>
      <Tab routeTabId="overview" />
      <Tab routeTabId="ratings" />
    </Tabs>
  </Page>;

export default Profile;
