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
});
