import React from "react";
import Auth from "./Auth";

const Dashboard = () => {
  return (
    <Auth>
      {user => (
        <div>
          <h1>Bonjour {user.displayName}</h1>
          <p>Votre token est : {user.token}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </Auth>
  );
};

export default Dashboard;
