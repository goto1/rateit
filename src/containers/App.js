import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Search from "../containers/Search";
import { connect } from "react-redux";
import { handleRouteChange, loginUser } from "../actions";
import routes from "../routes";
import {
  Framework7App,
  Toolbar,
  Pages,
  Icon,
  View,
  Navbar
} from "framework7-react";
import "framework7/dist/css/framework7.ios.min.css";
import "framework7/dist/css/framework7.ios.colors.min.css";

const NavigationLinkWrapper = styled.a`
  i.icon {
    font-size: 23px;
    padding-top: 5px;
  }
  span {
    font-size: 12px;
  }
`;

let NavigationLink = ({ path, icon, route, children }) => {
  const active = path === route.mainPath;
  const classNames = `link ${active ? "active" : ""}`.trim();
  return (
    <NavigationLinkWrapper href={path} className={classNames}>
      <Icon material={icon} />
      <span>
        {children}
      </span>
    </NavigationLinkWrapper>
  );
};

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ route: state.route });

NavigationLink = connect(mapStateToProps)(NavigationLink);

const NavToolbar = () =>
  <Toolbar tabbar labels>
    <NavigationLink path="/" icon="search">
      Search
    </NavigationLink>
    <NavigationLink path="/bookmarks/" icon="bookmark">
      Bookmarks
    </NavigationLink>
    <NavigationLink path="/settings/" icon="settings">
      Settings
    </NavigationLink>
  </Toolbar>;

const Views = ({ children }) =>
  <div className="views">
    <View id="main-view" navbarThrough toolbarThrough dynamicNavbar={true} main>
      <Navbar title="RateIt" sliding />
      <Pages>
        {children}
      </Pages>
      <NavToolbar />
    </View>
  </div>;

class Framework7 extends React.Component {
  componentDidMount() {
    // TEST USER
    const userCreds = {
      email: "rarn1141@njit.edu",
      password: "KMIlsRkGyX"
    };

    this.props.loginUser(userCreds);
  }

  render() {
    const { handleRouteChange, children } = this.props;
    return (
      <Framework7App routes={routes} onRouteChange={handleRouteChange}>
        <Views>
          {children}
        </Views>
      </Framework7App>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleRouteChange: e => dispatch(handleRouteChange(e)),
  loginUser: credentials => dispatch(loginUser(credentials))
});

Framework7 = connect(null, mapDispatchToProps)(Framework7);

const App = () =>
  <MainLayout>
    <Framework7>
      <Search />
    </Framework7>
  </MainLayout>;

export default App;
