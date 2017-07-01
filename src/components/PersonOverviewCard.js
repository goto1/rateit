// @flow
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRatingChip from "./NumericRatingChip";
import NumberOfRatings from "./NumberOfRatings";
import RatingCategories from "./RatingCategories";
import HorizontalRule from "./HorizontalRule";
import StarsRating from "./StarsRating";
import type { PersonOverview } from "../types/index";
import {
  AccordionItem,
  AccordionToggle,
  AccordionContent,
  Card,
  CardContent,
  CardFooter,
  Icon
} from "framework7-react";

const CardContentRow = styled.div`display: flex;`;

const Button = styled.button.attrs({
  type: "button"
})`
  border: none;
  background: inherit;
  font-size: 13px;
  padding: 0;
  flex-basis: ${props => props.flexBasis || "100%"};
  text-align: ${props => props.textAlign};
  &:focus { outline: none; }
  i {
    font-size: 17px;
    margin: ${props => props.iconMargin}
  }
`;

const PersonInfo = ({ type, name, rating, school, numOfRatings }) =>
  <div>
    <CardContentRow>
      <PersonName type={type} name={name} maxNameLength={24} />
      <NumericRatingChip>
        {rating}
      </NumericRatingChip>
    </CardContentRow>
    <CardContentRow>
      <PersonRole type={type} school={school} maxLength={15} />
    </CardContentRow>
    <CardContentRow>
      <NumberOfRatings numOfRatings={numOfRatings} />
      <StarsRating rating={rating} />
    </CardContentRow>
  </div>;

PersonInfo.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  school: PropTypes.string.isRequired,
  numOfRatings: PropTypes.number.isRequired
};

const PersonRatings = ({ ratings }) =>
  <AccordionItem>
    <CardContentRow>
      <AccordionToggle style={{ flexBasis: "100%" }}>
        <Button
          onClick={() => console.log("onClick")}
          textAlign="left"
          iconMargin="0 0 0 5px"
        >
          Quick Overview
          <Icon material="arrow_downward" />
        </Button>
      </AccordionToggle>
      <Button
        onClick={() => console.log("onClick")}
        textAlign="right"
        iconMargin="0 5px 0 0"
      >
        <Icon material="person" />
        Show Profile
      </Button>
    </CardContentRow>
    <AccordionContent>
      <RatingCategories ratings={ratings} />
    </AccordionContent>
  </AccordionItem>;

PersonRatings.propTypes = {
  ratings: PropTypes.array.isRequired
};

const PersonOverviewCard = (props: PersonOverview) =>
  <Card>
    <CardContent>
      <PersonInfo {...props} />
      <HorizontalRule
        margin="6px auto"
        width="90%"
        colorOne="#e5e5e5"
        colorTwo="#0b7eff"
      />
      <PersonRatings {...props} />
    </CardContent>
    <CardFooter style={{ flexDirection: "row-reverse" }}>
      <Button
        onClick={() => console.log("onClick")}
        textAlign="right"
        iconMargin="0 0 0 7.5px"
        flexBasis="75px"
      >
        Saved
        <Icon material="bookmark" />
      </Button>
    </CardFooter>
  </Card>;

export default PersonOverviewCard;
