import React from "react";
import { SidebarLayout, ScopeProvider } from "@compositor/x0/components";

import LCCTheme from "../src/LCCTheme";
import Login from "../src/Login";

const scope = {
  Login
};

export default props => (
  <ScopeProvider scope={scope}>
    <LCCTheme>
      <SidebarLayout {...props} title="La Chouette Doc™" />
    </LCCTheme>
  </ScopeProvider>
);
