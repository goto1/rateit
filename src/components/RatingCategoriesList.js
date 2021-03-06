import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumericRating from "./NumericRating";
import HorizontalRule from "./HorizontalRule";
import { Icon } from "./f7";

const DescriptionWrapper = styled.div`
  flex-grow: 1;
  padding-top: 4px;
  color: #000;
`;

const Description = ({ description }) => {
  const maxLength = 28;
  return (
    <DescriptionWrapper>
      {description.length > maxLength
        ? `${description.slice(0, maxLength - 2)}..`
        : description}
    </DescriptionWrapper>
  );
};

Description.propTypes = {
  description: PropTypes.string.isRequired
};

const StyledIcon = styled(Icon)`
  flex-basis: 22px;
  font-size: 19px;
  padding-top: 4px;
`;

const StyledNumericRating = styled(NumericRating)`
  font-size: 14px;
  span { font-size: 17px; }
`;

const CategoryWrapper = styled.div`
  display: flex;
  margin-bottom: 1px;
`;

const Category = ({ description, rating }) =>
  <CategoryWrapper>
    <StyledIcon material="forward" />
    <Description description={description} />
    <StyledNumericRating rating={rating} />
  </CategoryWrapper>;

Category.propTypes = {
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const RatingCategoriesWrapper = styled.div`margin-top: 7.5px;`;

const RatingCategories = ({ ratings, hrColors }) => {
  const length = ratings.length;
  return (
    <RatingCategoriesWrapper>
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
    </RatingCategoriesWrapper>
  );
};

RatingCategories.propTypes = {
  ratings: PropTypes.array.isRequired,
  hrColors: PropTypes.object.isRequired
};

export default RatingCategories;
