import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HorizontalRule from "../components/HorizontalRule";
import RatingCategories from "../components/RatingCategories";
import StarsRating from "../components/StarsRating";
import { ContentBlockTitleWrapper } from "../components/f7";
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

const HeaderContainer = styled(CardHeader)`
  div:nth-of-type(1) {
    padding-top: 2px;
  }
`;

const Header = ({ username, overallRating }) =>
  <HeaderContainer>
    <div>
      {username}
    </div>
    <StarsRating rating={overallRating} />
  </HeaderContainer>;

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
    font-size: 10.5px;
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

const Recommendation = ({ recommends }) =>
  <RecommendationWrapper iconColor={recommends ? "#00B232" : "#FF0000"}>
    <Icon material={recommends ? "done" : "clear"} />
    <div>
      {recommends
        ? "I would recommend this student!"
        : `I wouldn't recommend this student!`}
    </div>
  </RecommendationWrapper>;

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

const Content = ({ date, comments, recommends, individualRatings }) =>
  <CardContent>
    <DatePosted>
      {date}
    </DatePosted>
    <Comment>
      {comments}
    </Comment>
    <Recommendation recommends={recommends} />
    <HorizontalRule
      margin="1px auto"
      width="90%"
      colorOne="#FFF"
      colorTwo="#000"
    />
    <Details individualRatings={individualRatings} />
  </CardContent>;

const FooterButtonWrapper = styled.button.attrs({
  type: "button",
  onClick: props => props.onClick
})`
  border: none;
  background-color: inherit;
  display: flex;
  padding-right: 0px;
  &:focus {
    outline: none;
  }
  span {
    margin: 0 5px;
    font-size: 15px;
    padding-top: 2px;
  }
`;

const FooterButton = ({ icon, onClick, children }) =>
  <FooterButtonWrapper onClick={onClick}>
    <Icon material={icon} />
    <span>
      {children}
    </span>
  </FooterButtonWrapper>;

const CardFooterContainer = styled(CardFooter)`
  justify-content: flex-start !important;
`;

const Footer = ({ numOfLikes, numOfDislikes }) =>
  <CardFooterContainer>
    <FooterButton icon="thumb_up" onClick={() => console.log("liked")}>
      {numOfLikes}
    </FooterButton>
    <FooterButton icon="thumb_down" onClick={() => console.log("disliked")}>
      {numOfDislikes}
    </FooterButton>
  </CardFooterContainer>;

const CardContainer = styled(Card)`
  margin-bottom: 20px !important;
`;

const UserRating = props =>
  <CardContainer>
    <Header {...props} />
    <Content {...props} />
    <Footer numOfLikes={9} numOfDislikes={0} />
  </CardContainer>;

const ProfileRatingsTab = ({ usersRatings }) => {
  const numOfRatings = usersRatings.length;
  return (
    <div>
      <ContentBlockTitleWrapper>
        {`Showing ${numOfRatings} comments`}
      </ContentBlockTitleWrapper>
      {usersRatings.map((rating, index) =>
        <UserRating key={index} {...rating} />
      )}
    </div>
  );
};

export default ProfileRatingsTab;
