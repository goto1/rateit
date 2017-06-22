import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "framework7-react";

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

StarsRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarsRating;
