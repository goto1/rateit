import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HorizontalRule from "../components/HorizontalRule";
import RatingCategories from "../components/RatingCategories";
import StarsRating from "../components/StarsRating";
import { ContentBlockTitleCustom } from "../components/f7";
import {
  AccordionItem,
  AccordionToggle,
  AccordionContent,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Icon
} from "framework7-react";

const CardCustom = styled(Card)`
  margin-bottom: 20px !important;
`;

const CardHeaderCustom = styled(CardHeader)`
  div:nth-of-type(1) {
    padding-top: 2px;
  }
`;

const DatePosted = styled.div`
  text-align: right;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Comment = styled.div`margin: 7.5px 0;`;

const RecommendationWrapper = styled.div`
  font-weight: 500;
  display: flex;
  div {
    text-transform: uppercase;
    font-size: 10px;
    text-align: right;
    padding-top: 3px;
    margin-left: 5px;
  }
  i.icon {
    color: ${props => props.iconColor};
    text-align: right;
    font-size: 20px;
    flex-grow: 1;
  }
`;

const Recommendation = ({ recommends }) => {
  if (recommends) {
    return (
      <RecommendationWrapper iconColor="#00B232">
        <Icon material="done" />
        <div>I would recommend this student!</div>
      </RecommendationWrapper>
    );
  } else {
    return (
      <RecommendationWrapper iconColor="#FF0000">
        <Icon material="clear" />
        <div>I would not recommend this student!</div>
      </RecommendationWrapper>
    );
  }
};

const DetailsWrapper = styled.div`
  .accordion-item {
    margin-top: 5px;
  }
  .accordion-item-toggle {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
  }
  .accordion-item-toggle > .icon {
    font-size: 17px;
  }
  .accordion-item-content > div {
    margin-top: 1px;
  }
`;

const Details = ({ individualRatings }) =>
  <DetailsWrapper>
    <AccordionItem>
      <AccordionToggle>
        Show Details <Icon material="arrow_downward" />
      </AccordionToggle>
      <AccordionContent>
        <RatingCategories
          ratings={individualRatings}
          hrColors={{ colorOne: "#FFF", colorTwo: "#000" }}
        />
      </AccordionContent>
    </AccordionItem>
  </DetailsWrapper>;

const Rating = ({
  username,
  comments,
  recommends,
  date,
  individualRatings,
  overallRating
}) =>
  <CardCustom>
    <CardHeaderCustom>
      <div>
        {username}
      </div>
      <StarsRating rating={overallRating} />
    </CardHeaderCustom>
    <CardContent>
      <DatePosted>
        {date}
      </DatePosted>
      <Comment>
        {comments}
      </Comment>
      <Recommendation recommends={recommends} />
      <Details individualRatings={individualRatings} />
    </CardContent>
  </CardCustom>;

const UserRatings = ({ userRatings }) =>
  <div>
    {userRatings.map((rating, index) => <Rating key={index} {...rating} />)}
  </div>;

const ProfileRatingsTab = ({ numOfRatings, usersRatings }) => {
  return (
    <div>
      <ContentBlockTitleCustom text={`Showing ${numOfRatings} comments`} />
      <UserRatings userRatings={usersRatings} />
    </div>
  );
};

export default ProfileRatingsTab;
