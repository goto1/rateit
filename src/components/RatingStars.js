import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "framework7-react";

const Wrapper = styled.div`
  width: 95px;
  i.icon {
    font-size: 19px;
    color: #feba72;
    width: 19px;
    padding-bottom: 2px;
  }
`;

const RatingStars = ({ rating }) => {
  const NUMBER_OF_STARS = 5;
  const stringified = rating.toString();
  const decimalPointIndex = stringified.indexOf(".");

  const halfStar = decimalPointIndex > -1 ? 1 : 0;
  const wholeStars = halfStar
    ? +stringified.slice(0, decimalPointIndex)
    : +stringified;
  const emptyStars = NUMBER_OF_STARS - halfStar - wholeStars;

  return (
    <Wrapper>
      {Array.apply(null, Array(wholeStars)).map((item, idx) =>
        <Icon key={idx} material="start" />
      )}

      {halfStar === 1 && <Icon material="star_half" />}

      {Array.apply(null, Array(emptyStars)).map((item, idx) =>
        <Icon key={idx} material="star_border" />
      )}
    </Wrapper>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingStars;
