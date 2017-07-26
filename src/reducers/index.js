import { combineReducers } from "redux";
import { ROUTE_CHANGE } from "../actions";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const handleRouteChange = event => {
  const { params, route, path, url } = event;
  const query = JSON.stringify(event.query);
  let userId;
  let currentComponent;
  let currentTab;

  try {
    userId = params.id || null;
    currentComponent = route.component.name || null;
    currentTab = route.tab.component.name || null;
  } catch (e) {
    /* do nothing */
  }

  return omitBy(
    { path, url, userId, query, currentComponent, currentTab },
    isNil
  );
};

const currentRoute = (state = { path: "/" }, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return handleRouteChange(action.event);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentRoute
});

export default rootReducer;
