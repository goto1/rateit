import get from "lodash/get";

export const isMainPath = newPath =>
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

  return name ? extractComponentName(name) : get(route, `${path}.name`, null);
};
