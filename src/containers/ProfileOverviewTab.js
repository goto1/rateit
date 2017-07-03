import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import capitalize from "lodash/capitalize";
import HorizontalRule from "../components/HorizontalRule";
import NumericRating from "../components/NumericRating";
import RatingCategories from "../components/RatingCategories";
import { Icon, Card, CardHeader, CardContent } from "framework7-react";

const CardCustom = styled(Card)`
  margin: 25px 10px 25px 10px !important;
`;

const CardHeaderWrapper = styled(CardHeader)`
  div:nth-of-type(1) {
    padding-top: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const CardHeaderCustom = ({ title, children }) =>
  <CardHeaderWrapper>
    <div>
      {title}
    </div>
    {children !== undefined && children}
  </CardHeaderWrapper>;

CardHeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const CardContentWrapper = styled(CardContent)`
  .card-content-inner {
    padding: 5px 15px 15px 15px;
  }
`;

const CardContentCustom = ({ children }) =>
  <CardContentWrapper>
    {children}
  </CardContentWrapper>;

CardContentCustom.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

const CardContentItemWrapper = styled.div`
  margin-bottom: 5px;
  div {
    display: flex;
  }
  div > div:nth-of-type(1) {
    margin-right: 10px;
  }
  div > div:nth-of-type(2) {
    padding-top: 3px;
  }
`;

const CardContentItem = ({ icon, text }) =>
  <CardContentItemWrapper>
    <div>
      <div>
        <Icon material={icon} />
      </div>
      <div>
        {text}
      </div>
    </div>
    <HorizontalRule
      width="80%"
      margin="0 auto"
      colorOne="#FFFFFF"
      colorTwo="#747475"
    />
  </CardContentItemWrapper>;

CardContentItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const ProfileOverviewTab = ({
  name,
  type,
  school,
  major,
  email,
  rating,
  numOfRatings,
  ratings
}) =>
  <div>
    <CardCustom>
      <CardHeaderCustom title={name}>
        <NumericRating fontSize={17}>
          {rating}
        </NumericRating>
      </CardHeaderCustom>
      <CardContent>
        <CardContentItem icon="portrait" text={capitalize(type)} />
        <CardContentItem icon="location_city" text={school} />
        <CardContentItem icon="school" text={major} />
        <CardContentItem icon="email" text={email} />
      </CardContent>
    </CardCustom>
    <CardCustom>
      <CardHeaderCustom title={`Based on ${numOfRatings} ratings`} />
      <CardContentCustom>
        <RatingCategories
          ratings={ratings}
          hrColors={{ colorOne: "#FFF", colorTwo: "#747475" }}
        />
      </CardContentCustom>
    </CardCustom>
  </div>;

ProfileOverviewTab.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  numOfRatings: PropTypes.number.isRequired,
  ratings: PropTypes.array.isRequired
};

export default ProfileOverviewTab;
