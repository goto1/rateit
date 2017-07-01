import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumericRating from "./NumericRating";
import HorizontalRule from "./HorizontalRule";
import { Icon } from "framework7-react";

const IconCustom = styled(Icon)`
  flex-basis: 22px;
  font-size: 19px;
  padding-top: 4px;
`;

const Description = ({ description }) => {
  const maxLength = 28;
  return (
    <div style={{ flexGrow: "1", paddingTop: "4px", color: "#000" }}>
      {description.length > maxLength
        ? `${description.slice(0, maxLength - 2)}..`
        : description}
    </div>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired
};

const Category = ({ description, rating }) =>
  <div style={{ display: "flex", marginBottom: "1px" }}>
    <IconCustom material="forward" />
    <Description description={description} />
    <NumericRating rating={rating} fontSize={14} />
  </div>;

Category.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const RatingCategories = ({ ratings, hrColors }) => {
  const length = ratings.length;

  return (
    <div style={{ marginTop: "7.5px" }}>
      {ratings.map((category, index) =>
        <div key={index}>
          <Category
            description={category.description}
            rating={category.rating}
          />
          {index !== length - 1 &&
            <HorizontalRule
              margin="1px auto"
              width="70%"
              colorOne={hrColors.colorOne}
              colorTwo={hrColors.colorTwo}
            />}
        </div>
      )}
    </div>
  );
};

RatingCategories.propTypes = {
  ratings: PropTypes.array.isRequired,
  hrColors: PropTypes.object.isRequired
};

export default RatingCategories;
