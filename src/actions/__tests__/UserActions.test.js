import {
  fetchUserIfNeeded,
  receiveUserInfo,
  requestUserInfo
} from "../UserActions";
import * as ActionTypes from "../ActionTypes";

describe("UserActions", () => {
  describe("requestUserInfo()", () => {
    it("should create an action to request user info", () => {
      const userId = "jf4k3l2";
      const expected = {
        type: ActionTypes.USER_INFO_REQUEST,
        userId
      };
      const actual = requestUserInfo(userId);
      expect(actual).toEqual(expected);
    });
  });

  describe("receiveUserInfo()", () => {
    it("should create an action to receive user info", () => {
      const userId = "jf4k3l2";
      const expected = {
        type: ActionTypes.USER_INFO_SUCCESS,
        userId,
        data: {
          id: userId
        },
        receivedAt: Date.now()
      };
      const actual = receiveUserInfo(userId, expected.data);
      expect(actual).toEqual(expected);
    });
  });
});
