import Bookmarks, {
  SavedProfessors,
  SavedStudents
} from "./containers/Bookmarks";
import General from "./containers/General";
import HelpCenter from "./containers/HelpCenter";
import RateUser from "./containers/RateUser";
import Search from "./containers/Search";
import Settings from "./containers/Settings";
import Terms from "./containers/Terms";
import UserProfile from "./containers/UserProfile";
import UserProfileOverview from "./containers/UserProfileOverview";
import UserProfileRatings from "./containers/UserProfileRatings";

const routes = [
  {
    path: "/",
    component: Search
  },
  {
    path: "/bookmarks/",
    component: Bookmarks,
    tabs: [
      {
        path: "/",
        tabId: "professors",
        component: SavedProfessors
      },
      {
        path: "/students/",
        tabId: "students",
        component: SavedStudents
      }
    ]
  },
  {
    path: "/settings/",
    component: Settings
  },
  {
    path: "/settings/general/",
    component: General
  },
  {
    path: "/settings/help/",
    component: HelpCenter
  },
  {
    path: "/settings/terms/",
    component: Terms
  },
  {
    path: "/rate/",
    component: RateUser
  },
  {
    path: "/user/:id",
    component: UserProfile,
    tabs: [
      {
        path: "/",
        tabId: "overview",
        component: UserProfileOverview
      },
      {
        path: "/ratings/",
        tabId: "ratings",
        component: UserProfileRatings
      }
    ]
  }
];

export default routes;
