import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import capitalize from "lodash/capitalize";
import HorizontalRule from "../components/HorizontalRule";
import NumericRating from "../components/NumericRating";
import RatingCategories from "../components/RatingCategories";
import { Icon, Card, CardHeader, CardContent } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const CardContainer = styled(Card)`
  margin: 25px 10px !important;
`;

const HeaderWrapper = styled(CardHeader)`
  div:nth-of-type(1) {
    padding-top: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const Header = ({ title, children: userRating }) =>
  <HeaderWrapper>
    <div>
      {title}
    </div>
    {userRating !== undefined && userRating}
  </HeaderWrapper>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userRating: PropTypes.object
};

const ContentWrapper = styled(CardContent)`
  .card-content-inner {
    padding: 5px 15px 15px 15px;
  }
`;

const Content = ({ children }) =>
  <ContentWrapper>
    {children}
  </ContentWrapper>;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

const ContentItemContainer = styled.div`
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

const ContentItem = ({ icon, text }) =>
  <ContentItemContainer>
    <div>
      <div>
        <Icon material={icon} />
      </div>
      <div>
        {text.length > 23 ? `${text.slice(0, 23)}..` : text}
      </div>
    </div>
    <HorizontalRule
      width="80%"
      margin="0 auto"
      colorOne="#FFFFFF"
      colorTwo="#747475"
    />
  </ContentItemContainer>;

ContentItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

// DELETE WHEN DONE TESTING
const user = API.getUserDetails("UArjrbxWHX");
const arrStringify = (arr, attr) => {
  let str = null;
  if (arr.length > 1) {
    str = arr.map(item => item[attr]).join(", ");
  } else {
    str = arr[0]["name"];
  }

  return str;
};

const UserProfileOverviewTab = () => {
  const {
    name,
    type,
    schools,
    majors,
    emails,
    overallRating,
    aggregateRatings,
    userRatings
  } = user;

  const schoolNames = arrStringify(schools, "abbreviation");
  const majorNames = arrStringify(majors, "abbreviation");
  const userEmails = emails.map(email => email).join(", ");
  const numOfRatings = userRatings.length;

  return (
    <div>
      <CardContainer>
        <Header title={name}>
          <NumericRating fontSize={17}>
            {overallRating}
          </NumericRating>
        </Header>
        <Content>
          <ContentItem icon="portrait" text={capitalize(type)} />
          <ContentItem icon="location_city" text={schoolNames} />
          <ContentItem icon="school" text={majorNames} />
          <ContentItem icon="email" text={userEmails} />
        </Content>
      </CardContainer>
      <CardContainer>
        <Header title={`Based on ${numOfRatings} ratings`} />
        <Content>
          <RatingCategories
            ratings={aggregateRatings}
            hrColors={{ colorOne: "#FFF", colorTwo: "#747475" }}
          />
        </Content>
      </CardContainer>
    </div>
  );
};

export default UserProfileOverviewTab;
