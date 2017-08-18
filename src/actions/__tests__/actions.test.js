import * as actions from "../";
import * as types from "../../constants/ActionTypes";

describe("actions", () => {
  it("should create an action to request user information", () => {
    const userId = "fj3kf3";
    const expected = {
      type: types.REQUEST_USER_INFO,
      userId
    };
    const actual = actions.requestUserInfo(userId);
    expect(actual).toEqual(expected);
  });
});
