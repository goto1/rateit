import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
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

// DELETE WHEN DONE TESTING
import * as API from "../utils";

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
    this.state = { loading: true, error: false, user: {} };
  }

  componentDidMount() {
    const userId = get(this.props, "currentRoute.userId", null);
    API.getUserDetailsPromisified(userId)
      .then(user => {
        this.setState((prevState, props) => ({
          ...prevState,
          loading: !prevState.loading,
          user
        }));
      })
      .catch(err => {
        this.setState((prevState, props) => ({
          ...prevState,
          loading: !prevState.loading,
          error: true
        }));
      });
  }

  render() {
    const { user, loading, error } = this.state;
    const title = `${capitalize(user.type)} Details`;
    return (
      <Page withSubnavbar>
        {loading || error
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

        {loading || error
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

const mapStateToProps = state => ({ currentRoute: state.currentRoute });

UserProfile = connect(mapStateToProps)(UserProfile);

export default UserProfile;
