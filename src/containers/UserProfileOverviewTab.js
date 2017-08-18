import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import capitalize from "lodash/capitalize";
import get from "lodash/get";
import HorizontalRule from "../components/HorizontalRule";
import NumericRating from "../components/NumericRating";
import RatingCategoriesList from "../components/RatingCategoriesList";
import { Icon, Card, CardContent, CardHeader } from "../components/f7";

// DELETE WHEN DONE TESTING
import * as API from "../utils";

const StyledCard = styled(Card)`
  margin: ${props => (props.margin ? props.margin : "25px 10px")} !important;
`;

const StyledCardHeader = styled(CardHeader)`
  .title {
    padding-top: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const Header = ({ title, children }) =>
  <StyledCardHeader>
    <div className="title">
      {title}
    </div>
    {children ? children : null}
  </StyledCardHeader>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userRating: PropTypes.node
};

const CardContentStyled = styled(CardContent)`
  .card-content:first-child {
    padding: 5px 15px 15px 15px;
    border: 1px solid red;
  }
`;

const Content = ({ children }) =>
  <CardContentStyled>
    {children}
  </CardContentStyled>;

Content.propTypes = {
  children: PropTypes.node.isRequired
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

const StyledNumericRating = styled(NumericRating)`
  font-size: 17px;
  span { font-size: 20px; }
`;

const StyledIcon = styled(Icon)`
  position: absolute !important;
  right: 10px;
  bottom: 10px;
`;

const UserInformation = ({
  bookmarked = false,
  emails,
  majors,
  name,
  overallRating,
  schools,
  type
}) => {
  const schoolNames = arrStringify(schools, "abbreviation");
  const majorNames = arrStringify(majors, "abbreviation");
  const userEmails = emails.map(email => email).join(", ");
  return (
    <StyledCard>
      <Header title={name}>
        <StyledNumericRating rating={overallRating} />
      </Header>
      <Content>
        <ContentItem icon="portrait" hr>
          {capitalize(type)}
        </ContentItem>
        <ContentItem icon="location_city" hr>
          {schoolNames}
        </ContentItem>
        <ContentItem icon="school" hr>
          {majorNames}
        </ContentItem>
        <ContentItem icon="email" hr={false}>
          {userEmails}
        </ContentItem>
        {bookmarked
          ? <StyledIcon material="bookmark" />
          : <StyledIcon material="bookmark_border" />}
      </Content>
    </StyledCard>
  );
};

UserInformation.propTypes = {
  bookmarked: PropTypes.bool,
  emails: PropTypes.array.isRequired,
  majors: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  overallRating: PropTypes.number.isRequired,
  schools: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

const UserAggregateRatings = ({ userRatings, aggregateRatings }) => {
  const numOfRatings = userRatings.length;
  return (
    <StyledCard margin="10px 10px 40px 10px">
      <Header title={`Based on ${numOfRatings} ratings`} />
      <Content>
        <RatingCategoriesList
          ratings={aggregateRatings}
          hrColors={{ colorOne: "#FFF", colorTwo: "#747475" }}
        />
      </Content>
    </StyledCard>
  );
};

UserAggregateRatings.propTypes = {
  userRatings: PropTypes.array.isRequired,
  aggregateRatings: PropTypes.array.isRequired
};

// DELETE WHEN DONE TESTING
const user = API.getUserDetails("UArjrbxWHX");

class UserProfileOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const userId = get(this.props, "currentRoute.userId", null);
    API.getUserDetailsPromisified(userId).then(user => {
      this.setState((prevState, props) => ({
        ...prevState,
        user
      }));
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user.length > 1 &&
          <div>
            <UserInformation {...user} />
            <UserAggregateRatings {...user} />
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

UserProfileOverview = connect(mapStateToProps)(UserProfileOverview);

export default UserProfileOverview;

// const UserProfileOverviewTab = () =>
//   <div>
//     <UserInformation {...user} />
//     <UserAggregateRatings {...user} />
//   </div>;

// export default UserProfileOverviewTab;
