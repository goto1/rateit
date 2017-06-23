// @flow
import React from "react";
import styled from "styled-components";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRating from "./NumericRating";
import NumberOfRatings from "./NumberOfRatings";
import StarsRating from "./StarsRating";
import type { PersonOverview } from "../types/index";
import { Card, CardContent, CardFooter, Icon } from "framework7-react";

const CardContentRow = styled.div`
  display: flex;
`;

const HorizontalRule = styled.hr`
  border: 0;
  margin: 6px auto;
  height: 1px;
  width: 90%;
  background-image: linear-gradient(to left, #E5E5E5, #0B7EFF, #E5E5E5);
`;

const Button = styled.button.attrs({
  type: "button",
  onClick: props => props.onClick
})`
  border: none;
  background: inherit;
  font-size: 13px;
  padding: 0;
  flex-basis: 50%;
  &:focus {
    outline: none;
  }
  i {
    font-size: 17px;
  }
`;

const QuickOverviewButton = Button.extend`
  text-align: left;
  i {
    margin-left: 3px;
  }
`;

const ShowProfileButton = Button.extend`
  text-align: right;
  i {
    margin-right: 3px;
  }
`;

const PersonOverviewCard = ({
  id,
  name,
  type,
  school,
  rating,
  numOfRatings
}: PersonOverview) =>
  <Card>

    <CardContent>
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

      <HorizontalRule />

      <CardContentRow>
        <QuickOverviewButton onClick={() => console.log("QOB clicked...")}>
          Quick Overview
          <Icon material="arrow_downward" />
        </QuickOverviewButton>

        <ShowProfileButton onClick={() => console.log("SPB clicked...")}>
          <Icon material="person" />
          Show Profile
        </ShowProfileButton>

      </CardContentRow>
    </CardContent>

    <CardFooter>CardFooter</CardFooter>

  </Card>;

export default PersonOverviewCard;
