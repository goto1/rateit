import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import HorizontalRule from "../components/HorizontalRule";
import NumericRating from "../components/NumericRating";
import RatingCategories from "../components/RatingCategories";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardFooter,
  Icon
} from "framework7-react";

import people from "../dummy-data"; // TO BE DELETED!

const CardCustom = ({ children }) =>
  <Card style={{ marginTop: "25px", marginBottom: "35px" }}>
    {children}
  </Card>;

const CardHeaderCustom = ({ title, children }) =>
  <div className="card-header">
    <div
      style={{
        paddingTop: "4px",
        textTransform: "uppercase",
        fontWeight: "500"
      }}
    >
      {title}
    </div>
    {children !== undefined && children}
  </div>;

CardHeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object
};

const CardContentCustom = ({ children }) =>
  <div className="card-content">
    <div
      className="card-content-inner"
      style={{ padding: "5px 15px 15px 15px" }}
    >
      {children}
    </div>
  </div>;

const CardContentItem = ({ icon, text }) =>
  <div style={{ marginBottom: "5px" }}>
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>
        <Icon material={icon} />
      </div>
      <div style={{ paddingTop: "3px" }}>
        {text}
      </div>
    </div>
    <HorizontalRule
      width="80%"
      margin="0 auto"
      colorOne="#FFFFFF"
      colorTwo="#747475"
    />
  </div>;

CardContentItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export const Overview = () =>
  <div>
    <CardCustom>
      <CardHeaderCustom title="Randal Rivera">
        <NumericRating rating={4.5} fontSize={17} />
      </CardHeaderCustom>
      <CardContent>
        <CardContentItem icon="portrait" text="Student" />
        <CardContentItem icon="location_city" text="NJIT" />
        <CardContentItem icon="school" text="Information Systems" />
        <CardContentItem icon="email" text="ranr1141@njit.edu" />
      </CardContent>
    </CardCustom>
    <CardCustom>
      <CardHeaderCustom title="Based on 201 ratings" />
      <CardContentCustom>
        <RatingCategories
          ratings={people[0].ratings}
          hrColors={{ colorOne: "#FFFFFF", colorTwo: "#747475" }}
        />
      </CardContentCustom>
    </CardCustom>
  </div>;

export const Ratings = () =>
  <CardCustom>
    <CardHeaderCustom name="Randal RiveraAAAAAA" rating={4.5} />
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
