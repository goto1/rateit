import React from "react";
import styled from "styled-components";
import { Icon } from "framework7-react";

const Name = ({ type, name }) =>
  <div
    className="person-name"
    style={{
      color: type.toLowerCase() === "student" ? "#497B3C" : "#6967AE",
      fontWeight: "500"
    }}
  >
    {name.length > 19 ? `${name.slice(0, 17)}..` : name}
  </div>;

const Role = ({ type, school }) =>
  <div style={{ color: "rgb(0,0,0)", fontSize: "14px" }}>
    {type} at {school.length > 10 ? `${school.slice(0, 8)}..` : school}
  </div>;

const NumOfRatings = ({ numOfRatings }) =>
  <div style={{ color: "#8E8E93", fontSize: "13px" }}>
    <span style={{ fontWeight: "600" }}>{numOfRatings}</span> ratings
  </div>;

const ArrowRight = () =>
  <Icon
    material="keyboard_arrow_right"
    style={{
      position: "absolute",
      right: "0",
      color: "#C7C7CC"
    }}
  />;

const NumericRating = ({ rating }) =>
  <div
    style={{
      borderRadius: "5px",
      backgroundColor: "#0B7EFF",
      color: "#FFF",
      width: "32.5px",
      textAlign: "center",
      fontWeight: "300",
      fontSize: "15px",
      position: "absolute",
      right: "25px",
      top: "2px"
    }}
  >
    {rating}
  </div>;

const Star = styled(Icon)`
  font-size: 19px;
  color: #FEBA72;
  width: 19px;
`;

const StarsRating = ({ rating }) => {
  const NUMBER_OF_STARS = 5;
  const stringified = rating.toString();
  const decimalPointIndex = stringified.indexOf(".");

  const halfStar = decimalPointIndex > -1 ? 1 : 0;
  const wholeStars = halfStar
    ? +stringified.slice(0, decimalPointIndex)
    : +stringified;
  const emptyStars = NUMBER_OF_STARS - halfStar - wholeStars;

  return (
    <div style={{ position: "absolute", bottom: "0", right: "6px" }}>
      {Array.apply(null, Array(wholeStars)).map((item, idx) =>
        <Star key={idx} material="start" />
      )}

      {halfStar === 1 && <Star material="star_half" />}

      {Array.apply(null, Array(emptyStars)).map((item, idx) =>
        <Star key={idx} material="star_border" />
      )}
    </div>
  );
};

const ListItemWrapper = ({ url, children }) =>
  <li>
    <a href={url} className="item-content" style={{ padding: "0" }}>
      <div className="item-inner" style={{ paddingRight: "0" }}>
        <div
          className="item-text"
          style={{ width: "100%", height: "100%", display: "flex" }}
        >
          {children}
        </div>
      </div>
    </a>
  </li>;

const PersonListItem = ({
  name,
  type,
  school,
  rating,
  numOfRatings,
  profileUrl
}) =>
  <ListItemWrapper url={profileUrl}>
    <div
      style={{ flexBasis: "165px", overflow: "hidden", paddingLeft: "15px" }}
    >
      <Name type={type} name={name} />
      <Role type={type} school={school} />
      <NumOfRatings numOfRatings={numOfRatings} />
    </div>

    <div style={{ flexBasis: "107px", position: "relative" }}>
      <ArrowRight />
      <NumericRating rating={rating} />
      <StarsRating rating={rating} />
    </div>
  </ListItemWrapper>;

export default PersonListItem;
