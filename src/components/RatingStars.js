import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "./f7";

const Wrapper = styled.div`width: 95px;`;

const IconStyled = styled(Icon)`
  font-size: 19px;
  color: #FEBA72;
  width: 19px;
  padding-bottom: 2px;
`;

const getCombinationOfStars = rating => {
  const TOTAL_NUMBER_OF_STARS = 5;
  const ratingStringified = rating.toString();
  const decimalPointIndex = ratingStringified.indexOf(".");

  const halfStar = decimalPointIndex > -1 ? 1 : 0;
  const wholeStars = halfStar
    ? +ratingStringified.slice(0, decimalPointIndex)
    : +ratingStringified;
  const emptyStars = TOTAL_NUMBER_OF_STARS - halfStar - wholeStars;

  return { halfStar, wholeStars, emptyStars };
};

const RatingStars = ({ rating }) => {
  const { halfStar, wholeStars, emptyStars } = getCombinationOfStars(rating);
  return (
    <Wrapper>
      {Array.apply(null, Array(wholeStars)).map((item, idx) =>
        <IconStyled key={idx} material="star" />
      )}

      {halfStar === 1 && <IconStyled material="star_half" />}

      {Array.apply(null, Array(emptyStars)).map((item, idx) =>
        <IconStyled key={idx} material="star_border" />
      )}
    </Wrapper>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired
};

export default RatingStars;
