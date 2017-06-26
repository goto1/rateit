import Search from "./containers/Search";
import Settings from "./containers/Settings";
import General from "./containers/General";
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
  }
];

export default routes;
