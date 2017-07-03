import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  letter-spacing: 2px;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : "1em")};
  span {
    font-weight: 500;
    color: ${props => props.ratingColor || "#000"};
    font-size: ${props => (props.fontSize ? `${props.fontSize + 3}px` : "1em")};
  }
`;

// <NumericRating fontSize={10}>{5}</NumericRating>
const NumericRating = ({ fontSize, children }) => {
  const rating = children;

  let color = "#A1BA37";
  if (rating <= 3) {
    color = "#DEB21C";
  }
  if (rating <= 2) {
    color = "#D91948";
  }

  return (
    <Wrapper fontSize={fontSize} ratingColor={color}>
      <span>{rating}</span>/5
    </Wrapper>
  );
};

NumericRating.propTypes = {
  fontSize: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired
};

export default NumericRating;
