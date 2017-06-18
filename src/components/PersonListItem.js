import React from "react";
import styled from "styled-components";
import { List, ListItem, Icon } from "framework7-react";

const ListItemCustom = ({ url, children }) =>
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

const Info = styled.div`
  flex-basis: 60%;
  padding-left: 15px;
`;

const Name = styled.div`
  color: ${props =>
    props.type.toLowerCase() === "student" ? "#497B3C" : "#6967AE"};
  font-weight: 500;
`;

const Role = styled.div`
  color: rgb(0,0,0);
  font-size: 14px;
`;

const NumberOfRatings = styled.div`
  color: #8E8E93;
  font-size: 13px;
  span {
    font-weight: 600
  }
`;

const Ratings = styled.div`
  flex-basis: 40%;
  position: relative;
`;

const Numeric = styled.div`
  border-radius: 5px;
  background-color: #0B7EFF;
  color: #FFFFFF;
  width: 32.5px;
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  position: absolute;
  right: 25px;
`;

const Arrow = styled.div`
  position: absolute;
  right: 0;
  color: #C7C7CC;
`;

const Star = styled(Icon)`
  font-size: 19px;
  color: #FEBA72;
`;

const Stars = ({ rating }) => {
  const stringified = rating.toString();
  const numberOfStars = 5;
  const indexOfDecimal = stringified.indexOf(".");
  const halfStar = indexOfDecimal > -1 ? true : false;
  const wholeStars = halfStar
    ? stringified.slice(0, indexOfDecimal)
    : stringified;
  const starsLeft = numberOfStars - (halfStar ? 1 : 0) - wholeStars;

  const whole = Array.apply(null, Array(+wholeStars)).map((item, idx) =>
    <Star key={idx} material="star" />
  );
  const half = halfStar && <Star material="star_half" />;
  const empty = Array.apply(null, Array(+starsLeft)).map((item, idx) =>
    <Star key={idx} material="star_border" />
  );

  return (
    <div style={{ position: "absolute", bottom: "0", right: "6px" }}>
      {whole}
      {half}
      {empty}
    </div>
  );
};

const PersonListItem = props =>
  <ListItemCustom url={props.link}>
    <Info>
      <Name type={props.type} className="person-name">{props.name}</Name>
      <Role>{props.role} at {props.school}</Role>
      <NumberOfRatings>
        <span>{props.numOfRatings}</span> ratings
      </NumberOfRatings>
    </Info>
    <Ratings>
      <Arrow><Icon material="keyboard_arrow_right" /></Arrow>
      <Numeric>{props.rating}</Numeric>
      <Stars rating={props.rating} />
    </Ratings>
  </ListItemCustom>;

// const PersonListItem = props =>
//   <ListItemCustom url="bitch tits">
//     <Info>
//       <Name type="Student">Randall Rivera</Name>
//       <Role>Student at NJIT</Role>
//       <NumberOfRatings><span>201</span> ratings</NumberOfRatings>
//     </Info>
//     <Ratings>
//       <Arrow><Icon material="keyboard_arrow_right" /></Arrow>
//       <Numeric>4.5</Numeric>
//       <Stars rating="4" />
//     </Ratings>
//   </ListItemCustom>;

export default PersonListItem;
