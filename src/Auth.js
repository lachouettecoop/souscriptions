import React from "react";
import { useSessionStorage } from "react-use";
import jwtDecode from "jwt-decode";
import Login from "./Login";

const Auth = ({ children }) => {
  const [user, setUser] = useSessionStorage("lcc-current-user");

  const handleJWT = token => {
    setUser({ ...jwtDecode(token).data, token });
  };

  const logout = () => {
    setUser(undefined);
  };

  return user ? children(user, logout) : <Login onSuccess={handleJWT} />;
};

export default Auth;
