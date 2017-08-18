import { extractComponentName, getComponentName } from "../ActionUtils";

describe("ActionUtils", () => {
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
});

// describe("handleRouterChange()", () => {
//   const event = {
//     params: {},
//     route: {
//       path: "/bookmarks/students/",
//       pagePath: "/bookmarks/",
//       tab: { tabId: "students" }
//     },
//     path: "/bookmarks/students/",
//     url: "/bookmarks/students/",
//     query: { "": "undefined" }
//   };

//   const currState = {
//     mainPath: "/bookmarks/",
//     path: "/bookmarks/",
//     url: "/bookmarks/"
//   };

//   it("should return an object", () => {
//     const result = handleRouteChange(event, currState);
//     const actual = typeof result;
//     const expected = "object";
//     expect(actual).toBe(expected);
//   });

//   it("should omit `userId` property in the final result", () => {
//     const result = handleRouteChange(event, currState);
//     const actual = typeof result.userId;
//     const expected = "undefined";
//     expect(actual).toBe(expected);
//   });

//   it("should return the `userId` object when it is present in the `event` object", () => {
//     const userId = "a1b4c49";
//     const updated = {
//       ...event,
//       params: {
//         id: userId
//       }
//     };
//     const result = handleRouteChange(updated, currState);
//     const actual = result.userId;
//     expect(actual).toBe(userId);
//   });
