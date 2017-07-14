import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import capitalize from "lodash/capitalize";
import HorizontalRule from "../components/HorizontalRule";
import NumericRating from "../components/NumericRating";
import RatingCategoriesList from "../components/RatingCategoriesList";
import { Icon, Card } from "../components/f7";
import { CardHeader, CardContent } from "framework7-react";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const StyledCard = styled(Card)`
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

const ContentItem = ({ icon, hr, children }) =>
  <ContentItemContainer>
    <div>
      <div>
        <Icon material={icon} />
      </div>
      <div>
        {children.length > 23 ? `${children.slice(0, 23)}..` : children}
      </div>
    </div>
    {hr &&
      <HorizontalRule
        width="80%"
        margin="0 auto"
        colorOne="#FFF"
        colorTwo="#747475"
      />}
  </ContentItemContainer>;

ContentItem.propTypes = {
  icon: PropTypes.string.isRequired,
  hr: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};

// DELETE WHEN DONE TESTING
const arrStringify = (arr, attr) => {
  let str = null;
  if (arr.length > 1) {
    str = arr.map(item => item[attr]).join(", ");
  } else {
    str = arr[0]["name"];
  }

  return str;
};

const NumericRatingStyled = styled(NumericRating)`
  font-size: 17px;
  span { font-size: 20px; }
`;

const UserInformation = ({
  name,
  overallRating,
  type,
  schools,
  majors,
  emails
}) => {
  const schoolNames = arrStringify(schools, "abbreviation");
  const majorNames = arrStringify(majors, "abbreviation");
  const userEmails = emails.map(email => email).join(", ");
  return (
    <StyledCard>
      <Header title={name}>
        <NumericRatingStyled rating={overallRating} />
      </Header>
      <Content>
        <ContentItem icon="portrait" hr={true}>
          {capitalize(type)}
        </ContentItem>
        <ContentItem icon="location_city" hr={true}>
          {schoolNames}
        </ContentItem>
        <ContentItem icon="school" hr={true}>
          {majorNames}
        </ContentItem>
        <ContentItem icon="email" hr={false}>
          {userEmails}
        </ContentItem>
      </Content>
    </StyledCard>
  );
};

UserInformation.propTypes = {
  name: PropTypes.string.isRequired,
  overallRating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  schools: PropTypes.array.isRequired,
  majors: PropTypes.array.isRequired,
  emails: PropTypes.array.isRequired
};

const UserAggregateRatings = ({ userRatings, aggregateRatings }) => {
  const numOfRatings = userRatings.length;
  return (
    <Card>
      <Header title={`Based on ${numOfRatings} ratings`} />
      <Content>
        <RatingCategoriesList
          ratings={aggregateRatings}
          hrColors={{ colorOne: "#FFF", colorTwo: "#747475" }}
        />
      </Content>
    </Card>
  );
};

UserAggregateRatings.propTypes = {
  userRatings: PropTypes.array.isRequired,
  aggregateRatings: PropTypes.array.isRequired
};

// DELETE WHEN DONE TESTING
const user = API.getUserDetails("UArjrbxWHX");

const UserProfileOverviewTab = () =>
  <div>
    <UserInformation {...user} />
    <UserAggregateRatings {...user} />
  </div>;

export default UserProfileOverviewTab;
