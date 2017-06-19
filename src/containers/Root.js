import React from "react";
import MainLayout from "../layouts/MainLayout";
import AppF7 from "./AppF7";
import Search from "../containers/Search";

// prettier-ignore
const Root = () => (
  <MainLayout>
    <AppF7>
      <Search />
    </AppF7>
  </MainLayout>
)

export default Root;
