import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";
import get from "lodash/get";

export const isMainPath = newPath =>
  ["/", "/bookmarks/", "/settings/"].includes(newPath);

export const getMainPath = newPath =>
  ["/", "/bookmarks/", "/settings/"].includes(newPath);

export const extractComponentName = displayName => {
  if (displayName.length < 0) {
    return;
  }

  return displayName.slice(
    displayName.indexOf("(") + 1,
    displayName.length - 1
  );
};

export const getComponentName = (route, path) => {
  const name = get(route, `${path}.displayName`, null);

  const test = name
    ? extractComponentName(name)
    : get(route, `${path}.name`, null);

  return name ? extractComponentName(name) : get(route, `${path}.name`, null);
};

export const handleRouteChange = (event, currState) => {
  const { params, route, path, url } = event;
  const mainPath = getMainPath(path) ? path : currState.mainPath;
  const query = Object.keys(event.query)[0].length !== 0 ? event.query : {};
  const userId = params.id || null;
  const currentComponent = getComponentName(route, "component");
  const currentTab = getComponentName(route, "tab.component");

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
