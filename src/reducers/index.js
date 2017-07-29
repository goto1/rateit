import { combineReducers } from "redux";
import { ROUTE_CHANGE } from "../actions";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

const getMainPath = newPath => {
  const paths = ["/", "/bookmarks/", "/settings/"];
  return paths.includes(newPath);
};

const handleRouteChange = (event, currState) => {
  const { params, route, path, url } = event;
  const mainPath = getMainPath(path) ? path : currState.mainPath;
  const query = JSON.stringify(event.query);
  const userId = params.id || null;
  const currentComponent = route.component ? route.component.name : null;
  const currentTab = route.tab ? route.tab.component.name : null;

  return omitBy(
    { mainPath, path, url, userId, query, currentComponent, currentTab },
    isNil
  );
};

const currentRoute = (state = { path: "/", mainPath: "/" }, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return handleRouteChange(action.event, state);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentRoute
});

export default rootReducer;
