import { handleRouteChange } from "./RouteActions";
import { fetchUserIfNeeded, fetchUsersIfNeeded } from "./UserActions";
import {
  loginUser,
  logoutUser,
  addUserToBookmarksIfNeeded,
  removeUserFromBookmarksIfNeeded
} from "./AuthUserActions";
import { fetchSchoolsIfNeeded } from "./SchoolActions";
import { fetchMajorsIfNeeded } from "./MajorActions";

export {
  addUserToBookmarksIfNeeded,
  fetchMajorsIfNeeded,
  fetchSchoolsIfNeeded,
  fetchUserIfNeeded,
  fetchUsersIfNeeded,
  handleRouteChange,
  loginUser,
  logoutUser,
  removeUserFromBookmarksIfNeeded
};
