import React from "react";
import Search from "./containers/Search";
import Settings from "./containers/Settings";
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
  }
];

export default routes;
