import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import Search from "../containers/Search";
import { connect } from "react-redux";
import { routeChange } from "../actions";
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

let NavigationLink = ({ path, icon, currentPage, children }) => {
  let active = false;
  if (path.length === 1) {
    active = currentPage === path ? true : false;
  }
  if (path.length > 1) {
    active = currentPage.indexOf(path) !== -1 ? true : false;
  }

  const classNames = `${active ? "active" : ""} link`;

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
  currentPage: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ currentPage: state.currentPage });

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

const handleChange = (event, reducer) => {
  // DEBUGING...
  const { params, route, path, url } = event;
  const paramsId = params.id || "N/A";
  const currComponent = route.component.name || "N/A";
  let currTab = "N/A";

  try {
    currTab = route.tab.component.name;
  } catch (e) {
    /* do nothing */
  }

  console.log("userID", paramsId);
  console.log("path", path);
  console.log("url", url);
  console.log("currComponent", currComponent);
  console.log("currTab", currTab);

  reducer(path);
};

let Framework7 = ({ children, onRouteChange }) =>
  <Framework7App
    routes={routes}
    onRouteChange={event => {
      handleChange(event, onRouteChange);
    }}
  >
    <Views>
      {children}
    </Views>
  </Framework7App>;

const mapDispatchToProps = dispatch => ({
  onRouteChange: path => {
    dispatch(routeChange(path));
  }
});

Framework7 = connect(null, mapDispatchToProps)(Framework7);

const App = () =>
  <MainLayout>
    <Framework7>
      <Search />
    </Framework7>
  </MainLayout>;

export default App;
