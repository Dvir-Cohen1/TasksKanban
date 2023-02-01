import React, { useEffect } from "react";
import Routes from "../routes/Routes";
import { useDispatch } from "react-redux";
import { isLoginByToken } from "./redux/slices/authSlice";
import { getLocalStorageValue } from "../utils/localStorage.util";

const App = () => {
  const dispatch = useDispatch();
  const token = getLocalStorageValue("ac_token");

  useEffect(() => {
    if (token) {
      dispatch(isLoginByToken());
    }
  }, [dispatch, token]);

  return <Routes />;
};

export default App;
