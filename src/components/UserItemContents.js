import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";
import capitalize from "lodash/capitalize";

const FullNameWrapper = styled.div`
  font-size: 15px;
  font-weight: 500;
  flex-grow: 1;
  color: ${props => props.color};
`;

const FullName = ({ type, maxLength, children }) => {
  const color = type.toLowerCase() === "student" ? "#497B3C" : "#6967AE";
  const fullName =
    children.length > maxLength
      ? `${children.slice(0, maxLength - 2)}..`
      : children;

  return (
    <FullNameWrapper className="full-name" color={color}>
      {fullName}
    </FullNameWrapper>
  );
};

FullName.propTypes = {
  type: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

const UserRating = styled.div`
  border-radius: 5px;
  background-color: #0b7eff;
  color: #fff;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  width: 32.5px;
  padding: 1px;
  margin: ${props => props.margin || "0"};
`;

UserRating.propTypes = {
  children: PropTypes.number.isRequired
};

const UserRoleWrapper = styled.div`
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .5px;
`;

const UserRole = ({ type, schools, maxLength }) => {
  const schoolNames = schools.map(school => school.abbreviation).join(", ");

  return (
    <UserRoleWrapper>
      {capitalize(type)} at{" "}
      {schoolNames.length > maxLength
        ? `${schoolNames.slice(0, maxLength - 2)}..`
        : schoolNames}
    </UserRoleWrapper>
  );
};

const TotalRatingsWrapper = styled.div`
  color: #8e8e93;
  font-size: 14px;
  flex-grow: 1;
  margin-top: 2px;
  span {
    font-weight: 600;
  }
`;

const TotalRatings = ({ numOfRatings }) =>
  <TotalRatingsWrapper>
    <span>{numOfRatings}</span> ratings
  </TotalRatingsWrapper>;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const UserItemContentsContainer = styled.div`width: 100%;`;

const UserItemContents = ({
  name,
  type,
  schools,
  overallRating,
  userRatings,
  margin
}) =>
  <UserItemContentsContainer>
    <Row>
      <FullName type={type} maxLength={20}>
        {name}
      </FullName>
      <UserRating margin={margin}>
        {overallRating}
      </UserRating>
    </Row>
    <Row>
      <UserRole type={type} schools={schools} maxLength={10} />
    </Row>
    <Row>
      <TotalRatings numOfRatings={userRatings.length} />
      <RatingStars rating={overallRating} />
    </Row>
  </UserItemContentsContainer>;

UserItemContents.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["student", "professor"]),
  schools: PropTypes.array.isRequired,
  overallRating: PropTypes.number.isRequired,
  userRatings: PropTypes.array.isRequired,
  margin: PropTypes.string
};

export default UserItemContents;
