import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUserInfoIfNeeded } from "../actions";
import capitalize from "lodash/capitalize";
import get from "lodash/get";
import { Preloader } from "../components/f7";
import {
  Page,
  Navbar,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tab,
  Tabs
} from "framework7-react";

// TODO: add a bookmarked button & rate this student button

const PreloaderWrapper = styled.div`
  height: 96.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledPreloader = styled(Preloader)`
  display: block;
`;

const ErrorWrapper = styled.div`
  margin-top: 15px;
  color: red;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  text-align: center;
`;

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ""
    };
  }

  componentDidMount() {
    const userId = get(this.props, "currentRoute.userId", null);
    const { dispatch } = this.props;
    this.setState((prevState, props) => {
      dispatch(fetchUserInfoIfNeeded(userId));
      return {
        ...prevState,
        userId
      };
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { users } = nextProps;
    const { userId } = nextState;
    return users.hasOwnProperty(userId);
  }

  render() {
    const { userId } = this.state;
    const { users } = this.props;
    const user = users[userId];

    const isFetching = user ? user.isFetching : null;
    const title = user ? `${capitalize(user.type)} Details` : null;

    const error = false;
    return (
      <Page withSubnavbar>
        {!user || isFetching || error
          ? <Navbar title={title} backLink="Back" sliding />
          : <Navbar title={title} backLink="Back" sliding>
              <Subnavbar sliding>
                <ButtonsSegmented>
                  <Button routeTabLink="#overview" href={`/user/${user.id}`}>
                    Overview
                  </Button>
                  <Button
                    routeTabLink="#ratings"
                    href={`/user/${user.id}/ratings`}
                  >
                    Ratings
                  </Button>
                </ButtonsSegmented>
              </Subnavbar>
            </Navbar>}

        {!user || isFetching || error
          ? <PreloaderWrapper>
              <StyledPreloader size="big" />
              {error &&
                <ErrorWrapper>
                  Couldn't retrieve user's information
                </ErrorWrapper>}
            </PreloaderWrapper>
          : <Tabs>
              <Tab routeTabId="overview" />
              <Tab routeTabId="ratings" />
            </Tabs>}
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  currentRoute: state.currentRoute,
  users: state.users
});

UserProfile = connect(mapStateToProps)(UserProfile);

export default UserProfile;
