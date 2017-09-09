import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchUserIfNeeded } from "../actions";
import capitalize from "lodash/capitalize";
import { Preloader } from "../components/f7";
import {
  Page,
  Navbar,
  NavLeft,
  NavCenter,
  Link,
  Subnavbar,
  ButtonsSegmented,
  Button,
  Tab,
  Tabs,
  Icon
} from "framework7-react";

const StyledText = styled.span`margin-left: 7px;`;

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
  color: red;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 1.25px;
  text-align: center;
  height: 97%;
  display: flex;
  align-items: center;
`;

class UserProfile extends React.Component {
  componentDidMount() {
    const { route, dispatch } = this.props;
    const userId = route.userId;
    dispatch(fetchUserIfNeeded(userId));
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { users, route } = nextProps;
    const userId = route.userId;
    return typeof users[userId] !== "undefined";
  }

  render() {
    const { route, users } = this.props;
    const user = users[route.userId];

    const isFetching = user ? user.isFetching : true;
    const title = user ? `${capitalize(user.type)} Details` : "";
    const prevPath = route.mainPath;

    const error = user ? user.error : false;

    if (error) {
      return (
        <Page>
          <ErrorWrapper>Couldn't retrieve user's information</ErrorWrapper>
        </Page>
      );
    }

    return (
      <Page withSubnavbar>
        {isFetching
          ? <Navbar sliding>
              <NavLeft sliding>
                <Link href={prevPath}>
                  <Icon icon="icon-back" /> <StyledText>Back</StyledText>
                </Link>
              </NavLeft>
              <NavCenter sliding>
                {title}
              </NavCenter>
            </Navbar>
          : <Navbar>
              <NavLeft sliding>
                <Link href={prevPath}>
                  <Icon icon="icon-back" /> <StyledText>Back</StyledText>
                </Link>
              </NavLeft>
              <NavCenter sliding>
                {title}
              </NavCenter>
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

        {isFetching
          ? <PreloaderWrapper>
              <StyledPreloader size="big" />
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
  route: state.route,
  users: state.users.all
});

UserProfile = connect(mapStateToProps)(UserProfile);

export default UserProfile;
