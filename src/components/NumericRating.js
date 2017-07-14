import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`letter-spacing: 2px;`;

export const Rating = styled.span`
  font-weight: 500;
  color: ${props => props.color};
`;

const NumericRating = ({ rating, className }) => {
  let color = "#A1BA37";

  if (rating <= 3) {
    color = "#DEB21C";
  }
  if (rating <= 2) {
    color = "#D91948";
  }

  return (
    <Wrapper className={className || ""}>
      <Rating color={color}>{rating}</Rating>/5
    </Wrapper>
  );
};

NumericRating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default NumericRating;
