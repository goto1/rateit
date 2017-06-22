import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./containers/App";
import "./index.css";

// import { navigateTo } from "framework7-redux";
// import { routeChange } from "./actions";

// console.log(navigateTo);

// store.dispatch(navigateTo("/search/", true));
// store.dispatch(routeChange("/search/"));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
