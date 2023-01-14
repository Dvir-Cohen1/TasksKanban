import React from "react";

const Login = React.lazy(() => import("../pages/authentication/Login"));
const Layout = React.lazy(() => import("../layout/AppLayout"));
const Register = React.lazy(() => import("../pages/authentication/Register"));

export const appRoutes = [
  // { linkLabel: "/", path: "/", component: Layout },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];
export const authRoutes = [
  // { linkLabel: "/", path: "/user", component: Layout },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
];
