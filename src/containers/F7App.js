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
  return (
    <Link href={`${path}`} className={path === currentPage ? "active" : ""}>
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

const F7App = ({ children, onRouteChange }) =>
  <Framework7App
    routes={routes}
    onRouteChange={({ route }) => onRouteChange(route.pagePath)}
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
