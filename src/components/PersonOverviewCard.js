// @flow
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRating from "./NumericRating";
import NumberOfRatings from "./NumberOfRatings";
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

const CardContentRow = styled.div`
  display: flex;
`;

const HorizontalRule = styled.hr`
  border: 0px;
  height: 1px;
  background-image: linear-gradient(to left, #E5E5E5, #0B7EFF, #E5E5E5);
  width: ${props => props.width};
  margin: ${props => props.margin};
`;

const Button = styled.button.attrs({
  type: "button",
  onClick: props => props.onClick
})`
  border: none;
  background: inherit;
  font-size: 13px;
  padding: 0;
  flex-basis: 100%;
  text-align: ${props => props.textAlign};
  &:focus { outline: none; }
  i {
    font-size: 17px;
    margin: ${props => props.iconMargin}
  }
`;

const RCNRWrapper = styled.div`
  color: rgb(0,0,0);
  letter-spacing: 2px;
  flex-basis: 29px;
  span {
    color: ${props => props.ratingColor};
    font-size: 17px;
    font-weight: 500;
  }
`;

const RatingCategoryNumericRating = ({ rating }) => {
  let color: string = "#A1BA37";
  if (rating <= 3) {
    color = "#DEB21C";
  }
  if (rating <= 2) {
    color = "#D91948";
  }

  return (
    <RCNRWrapper ratingColor={color}>
      <span>{rating}</span>/5
    </RCNRWrapper>
  );
};

RatingCategoryNumericRating.propTypes = {
  rating: PropTypes.number.isRequired
};

const RatingCategoryDescription = ({ description }) =>
  <div style={{ flexGrow: "1", paddingTop: "4px", color: "rgb(0,0,0)" }}>
    {description.length > 28 ? `${description.slice(0, 26)}..` : description}
  </div>;

RatingCategoryDescription.propTypes = {
  description: PropTypes.string.isRequired
};

const RatingCategoryIcon = styled(Icon)`
  flex-basis: 22px;
  font-size: 19px;
  padding-top: 4px;
`;

const RatingCategory = ({ description, rating }) =>
  <div style={{ display: "flex", marginBottom: "1px" }}>
    <RatingCategoryIcon material="forward" />
    <RatingCategoryDescription description={description} />
    <RatingCategoryNumericRating rating={rating} />
  </div>;

RatingCategory.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const RatingCategories = ({ ratings }) => {
  const ratingsLength = ratings.length;
  return (
    <div style={{ marginTop: "7.5px" }}>
      {ratings.map((rating, idx) =>
        <div key={idx}>
          <RatingCategory
            description={rating.description}
            rating={rating.rating}
          />
          {idx !== ratingsLength - 1 &&
            <HorizontalRule margin="1px auto" width="70%" />}
        </div>
      )}
    </div>
  );
};

RatingCategories.propTypes = {
  ratings: PropTypes.array.isRequired
};

const PersonInfo = ({ type, name, rating, school, numOfRatings }) =>
  <div>
    <CardContentRow>
      <PersonName type={type} name={name} maxNameLength={24} />
      <NumericRating>{rating}</NumericRating>
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
          iconMargin="0 0 0 3px"
        >
          Quick Overview
          <Icon material="arrow_downward" />
        </Button>
      </AccordionToggle>
      <Button
        onClick={() => console.log("onClick")}
        textAlign="right"
        iconMargin="0 3px 0 0"
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
      <HorizontalRule margin="6px auto" width="90%" />
      <PersonRatings {...props} />
    </CardContent>
    <CardFooter>CardFooter</CardFooter>
  </Card>;

export default PersonOverviewCard;
