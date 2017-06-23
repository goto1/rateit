// @flow
import React from "react";
import styled from "styled-components";
import { Icon } from "framework7-react";
import StarsRating from "./StarsRating";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRating from "./NumericRating";
import NumberOfRatings from "./NumberOfRatings";
import type { PersonOverview } from "../types/index";

const ArrowRight = styled(Icon)`
  color: #C7C7CC;
  right: -5px;
`;

const ListItemRow = styled.div`
  display: flex;
  width: 100%;
`;

const ItemInner = styled.div`
  flex-direction: column;
  padding-right: 15px;
`;

const ListItem = ({ url, children }) =>
  <li>
    <a href={url}>
      <div className="item-content">
        <ItemInner className="item-inner">{children}</ItemInner>
      </div>
    </a>
  </li>;

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
      <ArrowRight material="keyboard_arrow_right" />
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
