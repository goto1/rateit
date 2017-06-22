// @flow
import React from "react";
import styled from "styled-components";
import { Icon } from "framework7-react";
import StarsRating from "./StarsRating";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRating from "./NumericRating";
import NumberOfRatings from "./NumberOfRatings";
import type { PersonOverview } from "../types/types";

const ArrowRight = () =>
  <Icon
    material="keyboard_arrow_right"
    style={{
      color: "#C7C7CC",
      right: "-5px"
    }}
  />;

const ListItem = ({ url, children }) =>
  <li>
    <a href={url}>
      <div className="item-content">
        <div
          className="item-inner"
          style={{ flexDirection: "column", paddingRight: "15px" }}
        >
          {children}
        </div>
      </div>
    </a>
  </li>;

const ListItemRow = styled.div`
  display: flex;
  width: 100%;
`;

const PersonListItem = ({
  id,
  name,
  type,
  school,
  rating,
  numOfRatings
}: PersonOverview) =>
  <ListItem url={`/person/${id}/`}>
    <ListItemRow>
      <PersonName
        className="person-name"
        type={type}
        name={name}
        maxNameLength={20}
      />
      <NumericRating>{rating}</NumericRating>
      <ArrowRight />
    </ListItemRow>
    <ListItemRow>
      <PersonRole type={type} school={school} maxLength={12} />
    </ListItemRow>
    <ListItemRow>
      <NumberOfRatings numOfRatings={numOfRatings} />
      <StarsRating rating={rating} />
    </ListItemRow>
  </ListItem>;

export default PersonListItem;
