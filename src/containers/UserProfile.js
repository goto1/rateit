import React from "react";
import capitalize from "lodash/capitalize";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tab,
  Tabs
} from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const user = API.getUserDetails("UArjrbxWHX");

const UserProfile = () => {
  const title = `${capitalize(user.type)} Details`;
  const overviewUrl = `/user/${user.id}`;
  const ratingsUrl = `/user/${user.id}/ratings`;

  return (
    <Page withSubnavbar>
      <Navbar title={title} backLink="Back" sliding>
        <Subnavbar sliding>
          <ButtonsSegmented>
            <Button routeTabLink="#overview" href={overviewUrl}>
              Overview
            </Button>
            <Button routeTabLink="#ratings" href={ratingsUrl}>
              Ratings
            </Button>
          </ButtonsSegmented>
        </Subnavbar>
      </Navbar>

      <Tabs>
        <Tab routeTabId="overview" />
        <Tab routeTabId="ratings" />
      </Tabs>
    </Page>
  );
};

export default UserProfile;
