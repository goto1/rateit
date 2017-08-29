import isNil from "lodash/isNil";
import omitBy from "lodash/omitBy";
import { getComponentName, isMainPath } from "../utils/ActionUtils";
import * as ActionTypes from "./ActionTypes";

export const routeChange = route => ({
  type: ActionTypes.ROUTE_CHANGE,
  route
});

export const handleRouteChange = ({ params, path, query, route, url }) => (
  dispatch,
  getState
) => {
  const currentRoute = getState().route;
  const updatedRoute = omitBy(
    {
      currentComponent: getComponentName(route, "component"),
      currentTab: getComponentName(route, "tab.component"),
      mainPath: isMainPath(route.path) ? route.path : currentRoute.mainPath,
      path,
      query: Object.keys(query)[0].length !== 0 ? query : {},
      url,
      userId: params.id || null
    },
    isNil
  );

  return dispatch(routeChange(updatedRoute));
};
