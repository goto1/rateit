import React from "react";
import styled from "styled-components";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "framework7-react";

const CardCustom = styled(Card)`
  margin-top: 10px;
  margin-bottom: 35px;
`;

const CardHeaderCustom = ({ name, rating }) => {
  let ratingColor = "#A1BA37";

  if (rating <= 3) {
    ratingColor = "#DEB21C";
  }
  if (rating <= 2) {
    ratingColor = "#D91948";
  }

  return (
    <div className="card-header">
      <div>{name}</div>
      <div>
        <span
          style={{
            color: ratingColor
          }}
        >
          {rating}
        </span>/5
      </div>
    </div>
  );
};

export const Ratings = () =>
  <CardCustom>
    <CardHeaderCustom name="Randal Rivera" rating={4.5} />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fuga
      commodi eligendi a distinctio dicta quaerat quis explicabo reprehenderit,
      facilis soluta harum, provident, quidem laudantium nesciunt, sint aliquam
      voluptate non.
    </CardContent>
  </CardCustom>;

export const Overview = () =>
  <CardCustom>
    <CardHeaderCustom name="Randal Rivera" rating={4.5} />
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam fuga
      commodi eligendi a distinctio dicta quaerat quis explicabo reprehenderit,
      facilis soluta harum, provident, quidem laudantium nesciunt, sint aliquam
      voluptate non.
    </CardContent>
  </CardCustom>;

const Profile = () =>
  <Page withSubnavbar>
    <Navbar title="Student Details" backLink="Back" sliding>
      <Subnavbar sliding>
        <ButtonsSegmented>
          <Button routeTabLink="#overview" href="/profile/2929f929f2">
            Overview
          </Button>
          <Button routeTabLink="#ratings" href="/profile/29020020/ratings">
            Student
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
