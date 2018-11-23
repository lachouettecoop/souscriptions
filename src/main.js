import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import LCCTheme from "./LCCTheme";

import Dashboard from "./Dashboard";

render(
  <LCCTheme>
    <Router>
      <Dashboard path="/" />
    </Router>
  </LCCTheme>,
  document.getElementById("app")
);
