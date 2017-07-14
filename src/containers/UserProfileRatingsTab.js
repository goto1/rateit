import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import HorizontalRule from "../components/HorizontalRule";
import RatingCategoriesList from "../components/RatingCategoriesList";
import RatingStars from "../components/RatingStars";
import { Card, Icon, ContentBlockTitle } from "../components/f7";
import {
  AccordionItem,
  AccordionToggle,
  AccordionContent,
  CardHeader,
  CardContent,
  CardFooter
} from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const StyledHeader = styled(CardHeader)`
  div:nth-of-type(1) {
    padding-top: 2px;
    font-weight: 500;
  }
`;

const Header = ({ authorName, aggregateRating }) =>
  <StyledHeader>
    <div>
      {authorName.length > 15 ? `${authorName.slice(0, 13)}..` : authorName}
    </div>
    <RatingStars rating={aggregateRating} />
  </StyledHeader>;

Header.propTypes = {
  authorName: PropTypes.string.isRequired,
  aggregateRating: PropTypes.number.isRequired
};

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

const Recommendation = ({ recommendUser }) =>
  <RecommendationWrapper iconColor={recommendUser ? "#00B232" : "#FF0000"}>
    <Icon material={recommendUser ? "done" : "clear"} />
    <div>
      {recommendUser
        ? "I would recommend this student!"
        : `I wouldn't recommend this student!`}
    </div>
  </RecommendationWrapper>;

Recommendation.propTypes = {
  recommendUser: PropTypes.bool.isRequired
};

const DetailsWrapper = styled.div`
  .accordion-item {
    margin-top: 5px;
  }
  .accordion-item-toggle {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    text-align: right;
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
        <RatingCategoriesList
          ratings={individualRatings}
          hrColors={{ colorOne: "#e5e5e5", colorTwo: "#0b7eff" }}
        />
      </AccordionContent>
    </AccordionItem>
  </DetailsWrapper>;

Details.propTypes = {
  individualRatings: PropTypes.array.isRequired
};

const Content = ({ date, comment, recommendUser, individualRatings }) =>
  <CardContent>
    <DatePosted>
      {date}
    </DatePosted>
    <Comment>
      {comment}
    </Comment>
    <Recommendation recommendUser={recommendUser} />
    <HorizontalRule
      margin="1px auto"
      width="90%"
      colorOne="#e5e5e5"
      colorTwo="#0b7eff"
    />
    <Details individualRatings={individualRatings} />
  </CardContent>;

Content.propTypes = {
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  recommendUser: PropTypes.bool.isRequired,
  individualRatings: PropTypes.array.isRequired
};

const ButtonWrapper = styled.button.attrs({
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

const Button = ({ icon, onClick, children }) =>
  <ButtonWrapper onClick={onClick}>
    <Icon material={icon} />
    <span>
      {children}
    </span>
  </ButtonWrapper>;

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.number.isRequired
};

const StyledFooter = styled(CardFooter)`
  justify-content: flex-start !important;
`;

const Footer = ({ likes, dislikes }) =>
  <StyledFooter>
    <Button icon="thumb_up" onClick={() => console.log("liked")}>
      {likes}
    </Button>
    <Button icon="thumb_down" onClick={() => console.log("disliked")}>
      {dislikes}
    </Button>
  </StyledFooter>;

const StyledCard = styled(Card)`
  margin-bottom: 20px !important;
`;

const UserRating = props =>
  <StyledCard>
    <Header {...props} />
    <Content {...props} />
    <Footer {...props} />
  </StyledCard>;

UserRating.propTypes = {
  id: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  aggregateRating: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  individualRatings: PropTypes.array.isRequired,
  recommendUser: PropTypes.bool.isRequired
};

// DELETE WHEN DONE TESTING
const user = API.getUserDetails("UArjrbxWHX");

const UserProfileRatingsTab = () => {
  const numOfRatings = user.userRatings.length;
  const ratings = user.userRatings;

  return (
    <div>
      <ContentBlockTitle>
        {`Showing ${numOfRatings} ratings`}
      </ContentBlockTitle>
      {ratings.map(rating => <UserRating key={rating.id} {...rating} />)}
    </div>
  );
};

export default UserProfileRatingsTab;
