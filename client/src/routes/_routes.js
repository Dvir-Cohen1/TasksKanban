import React from "react";

const Login = React.lazy(() => import("../pages/authentication/Login"));
const Layout = React.lazy(() => import("../layout/AppLayout"));
const Index = React.lazy(() => import("../pages/Index"));
const Register = React.lazy(() => import("../pages/authentication/Register"));

export const appRoutes = [
  { linkLabel: "Home", path: "/", component: Index, isProtected: false },
  { linkLabel: "Login", path: "/login", component: Login },
  { linkLabel: "Register", path: "/register", component: Register },
  // { linkLabel: "Chat", path: "/chat", component: Chat, isProtected: true },
];
// export const authRoutes = [
//   // { linkLabel: "/", path: "/user", component: Layout },
//   { linkLabel: "Login", path: "/login", component: Login },
//   { linkLabel: "Register", path: "/register", component: Register },
// ];
