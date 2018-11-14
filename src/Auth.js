import React, { useState, useEffect } from "react";
import Login from "./Login";

const Auth = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("useAuth effect");
  });

  function handleLogin(user, password) {
    console.log("login", { user, password });
    setUser({
      displayName: "Pierre Martin",
      token: "shhhhh"
    });
  }

  return user ? children(user) : <Login onSubmit={handleLogin} />;
};

export default Auth;
