import {
  extractComponentName,
  getComponentName,
  handleRouteChange,
  isMainPath
} from "../ReducerUtils";

describe("ReducerUtils", () => {
  describe("isMainPath()", () => {
    it("should return `true` when the string `bookmarks` is in the path", () => {
      const actual = isMainPath("/bookmarks/");
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should return `false` when the string `rate` is not in the path", () => {
      const actual = isMainPath("/rate&type=professor");
      const expected = false;
      expect(actual).toBe(expected);
    });
  });

  describe("extractComponentName()", () => {
    it("should return `Bookmarks` as the component name", () => {
      const actual = extractComponentName("Connect(Bookmarks)");
      const expected = "Bookmarks";
      expect(actual).toBe(expected);
    });
  });

  describe("getComponentName()", () => {
    const route = {
      component: {
        name: "Bookmarks"
      },
      tab: {
        component: {
          name: "SavedProfessors"
        }
      }
    };

    it("should return `Bookmarks` as the component name", () => {
      const actual = getComponentName(route, "component");
      const expected = "Bookmarks";
      expect(actual).toBe(expected);
    });

    it("should return `RateUser` as the component name", () => {
      const updatedRoute = {
        ...route,
        component: {
          displayName: "Connect(RateUser)"
        }
      };
      const actual = getComponentName(updatedRoute, "component");
      const expected = "RateUser";
      expect(actual).toBe(expected);
    });

    it("should return `SavedProfessors` as the component name", () => {
      const actual = getComponentName(route, "tab.component");
      const expected = "SavedProfessors";
      expect(actual).toBe(expected);
    });
  });

  describe("handleRouterChange()", () => {
    const event = {
      params: {},
      route: {
        path: "/bookmarks/students/",
        pagePath: "/bookmarks/",
        tab: { tabId: "students" }
      },
      path: "/bookmarks/students/",
      url: "/bookmarks/students/"
    };

    const currState = {
      mainPath: "/bookmarks/",
      path: "/bookmarks/",
      query: {},
      url: "/bookmarks/"
    };

    // it('should renturn an object', () => {})
  });
});
