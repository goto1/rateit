import Search from "./containers/Search";
import Settings from "./containers/Settings";
import General from "./containers/General";
import Help from "./containers/Help";
import Terms from "./containers/Terms";
import Profile, { Overview, Ratings } from "./containers/Profile";
import Bookmarks, {
  SavedProfessors,
  SavedStudents
} from "./containers/Bookmarks";

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
    component: Help
  },
  {
    path: "/settings/terms/",
    component: Terms
  },
  {
    path: "/profile/:id",
    component: Profile,
    tabs: [
      {
        path: "/",
        tabId: "overview",
        component: Overview
      },
      {
        path: "/ratings/",
        tabId: "ratings",
        component: Ratings
      }
    ]
  }
];

export default routes;
