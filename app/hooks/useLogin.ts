import { useState, useEffect } from "react";
import axios from "axios";
import * as types from "../types/types";
import { useStore } from "../store/store";
import { useLazyQuery } from "@apollo/client";
import * as queries from "../graphql/queries";
// import useApi from "./useApi";

const useLogin = () => {
  const [userObject, setUserObject] = useState<types.LoginForm>();
  const { addUser, removeUser, setIsLoggedIn, removePosts } = useStore();
  const [loginQuery, {}] = useLazyQuery(queries.LOGIN, {
    variables: {
      username: userObject?.username,
      password: userObject?.password,
    },
  });

  const login = async (loginObject: types.LoginForm) => {
    setUserObject(loginObject);
    try {
      const result = await loginQuery();
      if (result.data.login === null) {
        return false;
      } else {
        const User: types.User = {
          id: result.data.login.id,
          username: result.data.login.username,
        };
        addUser(User);
        setIsLoggedIn(true);
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    removeUser();
    setIsLoggedIn(false);
    removePosts();
  };

  return { login, logout };
};

export default useLogin;
