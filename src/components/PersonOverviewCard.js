// @flow
import React from "react";
import styled from "styled-components";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRating from "./NumericRating";
import NumberOfRatings from "./NumberOfRatings";
import StarsRating from "./StarsRating";
import type { PersonOverview } from "../types/index";
import { Card, CardContent, CardFooter } from "framework7-react";

const CardContentRow = styled.div`
  display: flex;
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
    </CardContent>
    <CardFooter>CardFooter</CardFooter>
  </Card>;

export default PersonOverviewCard;
