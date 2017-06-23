import React from "react";
import MainLayout from "../layouts/MainLayout";
import F7App from "./F7App";
import Search from "../containers/Search";

const App = () =>
  <MainLayout>
    <F7App>
      <Search />
    </F7App>
  </MainLayout>;

export default App;
