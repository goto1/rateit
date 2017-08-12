import { isSubmissionDisabled } from "../FormUtils";

describe("FormUtils", () => {
  describe("isSubmissionDisabled()", () => {
    it("should return `true` when form is submitting", () => {
      const actual = isSubmissionDisabled({
        isSubmitting: true,
        errors: {},
        touched: { name: true }
      });
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should return `true` when errors are present", () => {
      const actual = isSubmissionDisabled({
        isSubmitting: false,
        errors: { name: "name is a required field" },
        touched: { name: true }
      });
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should return `true` when no form fields were `touched`", () => {
      const actual = isSubmissionDisabled({
        isSubmitting: false,
        errors: {},
        touched: {}
      });
      const expected = true;
      expect(actual).toBe(expected);
    });

    it("should return `false` when it is safe to allow submission", () => {
      const actual = isSubmissionDisabled({
        isSubmitting: false,
        errors: {},
        touched: { name: true }
      });
      const expected = false;
      expect(actual).toBe(expected);
    });
  });
});
