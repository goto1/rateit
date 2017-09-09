import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import UserListItem from "../components/UserListItem";
import PreloaderScreen from "../components/PreloaderScreen";
import {
  Card,
  CardContent,
  CardHeader,
  ContentBlock,
  ContentBlockTitle,
  GridCol,
  GridRow,
  LinkButton,
  List
} from "../components/f7";
import { Page, Navbar, Searchbar } from "framework7-react";
import { map } from "lodash";

const StyledLinkButton = styled(LinkButton)`
  color: ${props => props.color} !important;
  border: 2px solid ${props => props.color} !important;
  font-size: 14.5px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
`;

const StyledCard = styled(Card)`
  margin: 30px 0 !important;
`;

const StyledCardHeader = styled(CardHeader)`
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 500;
  justify-content: center !important;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
  span { font-weight: 500 !important; }
`;

const ChipWrapper = styled.span`
  margin: 7.5px 5px 0 0 !important;
  letter-spacing: 1.5px;
  background: #808080 !important;
`;

const Chip = ({ children }) =>
  <ChipWrapper className="chip">
    <span className="chip-label">
      {children}
    </span>
  </ChipWrapper>;

Chip.propTypes = {
  children: PropTypes.string.isRequired
};

const SchoolLabels = ({ schools }) =>
  <ContentBlockTitle>
    Showing results for
    <div>
      {schools.map(school =>
        <Chip key={school.id}>
          {school.abbreviation}
        </Chip>
      )}
    </div>
  </ContentBlockTitle>;

SchoolLabels.propTypes = {
  schools: PropTypes.array.isRequired
};

const StyledList = styled(List)`
  margin-top: 25px !important;
`;

class Search extends React.Component {
  renderUserList = () => {
    const allUsers = this.props.users.all;
    const numOfUsers = Object.keys(allUsers).length;

    return numOfUsers > 0
      ? map(allUsers, user => <UserListItem key={user.id} {...user} />)
      : null;
  };

  render() {
    const { user } = this.props;
    const userList = this.renderUserList();
    const authUserSchools = user.schools || null;
    const isLoading = userList === null || authUserSchools === null;

    return (
      <Page>
        <Navbar title="RateIt" sliding />

        {isLoading
          ? <PreloaderScreen size="big" />
          : <div>
              <Searchbar
                cancelLink="Cancel"
                placeholder="Search professors and classmates..."
                searchList=".searchbar-found"
                searchIn=".full-name"
                clearButton={true}
              />

              <SchoolLabels schools={authUserSchools} />

              <ContentBlock className="searchbar-not-found">
                <StyledCard>
                  <StyledCardHeader>No Results Found</StyledCardHeader>
                  <StyledCardContent>
                    Can't find what you're looking for? You can rate{" "}
                    <span>professors</span> or <span>classmates</span> down
                    below!
                  </StyledCardContent>
                </StyledCard>
                <GridRow>
                  <GridCol>
                    <StyledLinkButton
                      href="/rate/?type=professor"
                      color="#9595A8"
                      big
                    >
                      Professor
                    </StyledLinkButton>
                  </GridCol>
                  <GridCol>
                    <StyledLinkButton
                      href="/rate/?type=student"
                      color="#A8A284"
                      big
                    >
                      Classmate
                    </StyledLinkButton>
                  </GridCol>
                </GridRow>
              </ContentBlock>

              <StyledList className="searchbar-found" inset>
                {userList}
              </StyledList>
            </div>}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authUser,
  users: state.users
});

Search = connect(mapStateToProps)(Search);

export default Search;
