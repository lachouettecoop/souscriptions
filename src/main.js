import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import LCCTheme from "./LCCTheme";

import Dashboard from "./Dashboard";
import Subscription from "./Subscription";

render(
  <LCCTheme>
    <Router>
      <Dashboard path="/" />
      <Subscription path="/souscrire" />
    </Router>
  </LCCTheme>,
  document.getElementById("app")
);
