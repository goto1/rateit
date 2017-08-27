import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserItemContents from "./UserItemContents";
import RatingCategoriesList from "./RatingCategoriesList";
import HorizontalRule from "./HorizontalRule";
import {
  AccordionContent,
  AccordionItem,
  AccordionToggle,
  Card,
  CardContent,
  CardFooter,
  Icon
} from "./f7";

const Row = styled.div`display: flex;`;

export const Button = styled.button.attrs({
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
    margin: ${props => props.iconMargin};
  }
`;

const AccordionToggleStyled = styled(AccordionToggle)`
  flex-basis: 100%;
`;

const StyledLink = styled.a`
  width: 100%;
  text-align: right;
`;

const Actions = ({ aggregateRatings, userId }) =>
  <AccordionItem>
    <Row>
      <AccordionToggleStyled>
        <Button textAlign="left" iconMargin="0 0 0 5px">
          Quick Overview
          <Icon material="arrow_downward" />
        </Button>
      </AccordionToggleStyled>
      <StyledLink href={`/user/${userId}`}>
        <Button textAlign="right" iconMargin="0 5px 0 0">
          <Icon material="person" />
          See Profile
        </Button>
      </StyledLink>
    </Row>
    <AccordionContent>
      <RatingCategoriesList
        ratings={aggregateRatings}
        hrColors={{ colorOne: "#E5E5E5", colorTwo: "#0B7EFF" }}
      />
    </AccordionContent>
  </AccordionItem>;

Actions.propTypes = {
  aggregateRatings: PropTypes.array.isRequired
};

const CardFooterStyled = styled(CardFooter)`
  flex-direction: row-reverse;
`;

const UserCard = props => {
  const { id, aggregateRatings, removeUserFromBookmarks } = props;
  return (
    <Card>
      <CardContent>
        <UserItemContents {...props} />
        <HorizontalRule
          margin="6px auto"
          width="90%"
          colorOne="#e5e5e5"
          colorTwo="#0b7eff"
        />
        <Actions aggregateRatings={aggregateRatings} userId={id} />
      </CardContent>
      <CardFooterStyled>
        <Button
          onClick={() => removeUserFromBookmarks(id)}
          textAlign="right"
          iconMargin="0 0 0 7.5px"
          flexBasis="75px"
        >
          Saved
          <Icon material="bookmark" />
        </Button>
      </CardFooterStyled>
    </Card>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["student", "professor"]),
  schools: PropTypes.array.isRequired,
  overallRating: PropTypes.number.isRequired,
  userRatings: PropTypes.array.isRequired,
  aggregateRatings: PropTypes.array.isRequired,
  removeUserFromBookmarks: PropTypes.func.isRequired
};

export default UserCard;
