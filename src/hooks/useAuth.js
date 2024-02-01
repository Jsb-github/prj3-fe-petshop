import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "./redux";

export const LoginContext = createContext(null);

function UseAuth({ children }) {
  //const {id,email,token} = useAppSelector(state => state.userSlice);

  // return {
  // isAuth : !!email,
  // email,
  // id,
  // token,
  const [login, setLogin] = useState("");
  useEffect(() => {
    fetchLogin();
  }, []);

  function fetchLogin() {
    axios.get("/api/member/login").then((response) => setLogin(response.data));
  }

  function isAuthenticated() {
    return login !== "";
  }

  function isAdmin() {
    if (login.auth) {
      return login.auth.some((elem) => elem.manager === "admin");
    }

    return false;
  }

  function hasAccess(userId) {
    return login.email === userId;
  }

  return (
    <LoginContext.Provider
      value={{
        login,
        fetchLogin,
        isAuthenticated,
        hasAccess,
        isAdmin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default UseAuth;
