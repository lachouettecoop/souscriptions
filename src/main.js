import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import LCCTheme from "./LCCTheme";

import Dashboard from "./Dashboard";
import Subscription from "./Subscription";
import Reunions from "./Reunions";

render(
  <LCCTheme>
    <Router>
      <Dashboard path="/" />
      <Subscription path="/souscrire" />
      <Reunions path="/reunions" />
    </Router>
  </LCCTheme>,
  document.getElementById("app")
);
