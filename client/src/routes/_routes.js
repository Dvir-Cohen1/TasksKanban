import React from "react";

const Login = React.lazy(() => import("../pages/authentication/Login"));
const Register = React.lazy(() => import("../pages/authentication/Register"));

export const routes = [
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];
