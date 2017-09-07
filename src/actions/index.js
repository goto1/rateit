import { handleRouteChange } from "./RouteActions";
import { fetchUserIfNeeded, fetchUsersIfNeeded } from "./UserActions";
import {
  loginUser,
  logoutUser,
  addUserToBookmarks,
  removeUserFromBookmarks
} from "./AuthUserActions";
import { fetchSchoolsIfNeeded } from "./SchoolActions";
import { fetchMajorsIfNeeded } from "./MajorActions";

export {
  addUserToBookmarks,
  fetchMajorsIfNeeded,
  fetchSchoolsIfNeeded,
  fetchUserIfNeeded,
  fetchUsersIfNeeded,
  handleRouteChange,
  loginUser,
  logoutUser,
  removeUserFromBookmarks
};
