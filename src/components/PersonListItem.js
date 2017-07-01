// @flow
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Icon } from "framework7-react";
import StarsRating from "./StarsRating";
import PersonName from "./PersonName";
import PersonRole from "./PersonRole";
import NumericRatingChip from "./NumericRatingChip";
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
        <ItemInner className="item-inner">
          {children}
        </ItemInner>
      </div>
    </a>
  </li>;

ListItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

const PersonListItem = ({
  id,
  name,
  type,
  school,
  rating,
  numOfRatings
}: PersonOverview) =>
  <ListItem url={`/profile/${id}/`}>
    <ListItemRow>
      <PersonName
        className="person-name"
        type={type}
        name={name}
        maxNameLength={20}
      />
      <NumericRatingChip>
        {rating}
      </NumericRatingChip>
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
