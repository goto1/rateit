import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";
import get from "lodash/get";

const getMainPath = newPath =>
  ["/", "/bookmarks/", "/settings/"].includes(newPath);

export const handleRouteChange = (event, currState) => {
  const { params, route, path, url } = event;
  const mainPath = getMainPath(path) ? path : currState.mainPath;
  const query = JSON.stringify(event.query);
  const userId = params.id || null;
  const currentComponent = get(route, "component.name", null);
  const currentTab = get(route, "tab.component.name", null);

  return omitBy(
    {
      currentComponent,
      currentTab,
      mainPath,
      path,
      query,
      url,
      userId
    },
    isNil
  );
};
