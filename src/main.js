import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import Dashboard from "./Dashboard";

render(
  <Router>
    <Dashboard path="/" />
  </Router>,
  document.getElementById("app")
);
