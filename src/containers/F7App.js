import React from "react";
import { connect } from "react-redux";
import { routeChange } from "../actions";
import routes from "../routes";
import {
  Framework7App,
  Toolbar,
  Pages,
  Link,
  Icon,
  View,
  Views,
  Navbar
} from "framework7-react";

import "framework7/dist/css/framework7.ios.min.css";
import "framework7/dist/css/framework7.ios.colors.min.css";

let NavLink = ({ path, name, icon, currentPage }) => {
  let active = false;

  if (path.length === 1) {
    active = currentPage === path ? true : false;
  }
  if (path.length > 1) {
    active = currentPage.indexOf(path) !== -1 ? true : false;
  }

  return (
    <Link href={`${path}`} className={active ? "active" : ""}>
      <Icon material={icon} style={{ fontSize: "23px", paddingTop: "5px" }} />
      <span style={{ fontSize: "12px" }}>{name}</span>
    </Link>
  );
};

const mapStateToProps = state => ({ currentPage: state.currentPage });

NavLink = connect(mapStateToProps)(NavLink);

const NavToolbar = () =>
  <Toolbar tabbar labels>
    <NavLink path="/" name="Search" icon="search" />
    <NavLink path="/bookmarks/" name="Bookmarks" icon="bookmark" />
    <NavLink path="/settings/" name="Settings" icon="settings" />
  </Toolbar>;

const ViewsF7 = ({ children }) =>
  <Views>
    <View id="main-view" navbarThrough toolbarThrough dynamicNavbar={true} main>
      <Navbar title="RateIt" sliding />
      <Pages>
        {children}
      </Pages>
      <NavToolbar />
    </View>
  </Views>;

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

const F7App = ({ children, onRouteChange }) =>
  <Framework7App
    routes={routes}
    onRouteChange={event => {
      handleChange(event, onRouteChange);
    }}
  >
    <ViewsF7>
      {children}
    </ViewsF7>
  </Framework7App>;

const mapDispatchToProps = dispatch => ({
  onRouteChange: path => {
    dispatch(routeChange(path));
  }
});

export default connect(null, mapDispatchToProps)(F7App);
