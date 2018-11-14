import React from "react";
import Auth from "./Auth";

const Dashboard = () => {
  return <Auth>{user => <h1>Bonjour {user.displayName}</h1>}</Auth>;
};

export default Dashboard;
