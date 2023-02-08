import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/user.slice";

export const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
