import React from "react";
import PropTypes from "prop-types";
import { Views, View, Navbar, NavCenter, Pages } from "framework7-react";

const ViewsLayoutF7 = (props, context) =>
  <Views>
    <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
      {context.framework7AppContext.theme.ios
        ? <Navbar>
            <NavCenter sliding>RateIt</NavCenter>
          </Navbar>
        : null}
      <Pages>
        {props.children}
      </Pages>
    </View>
  </Views>;

ViewsLayoutF7.contextTypes = {
  framework7AppContext: PropTypes.object
};

export default ViewsLayoutF7;
