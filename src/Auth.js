import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import Login from "./Login";

const Auth = ({ children }) => {
  const [user, setUser] = useState();

  const handleJWT = token => {
    setUser({ ...jwtDecode(token).data, token });
  };

  return user ? children(user) : <Login onSuccess={handleJWT} />;
};

export default Auth;
