import React from "react";

const Login = React.lazy(() => import("../pages/authentication/Login"));
const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));
const Index = React.lazy(() => import("../pages/Index"));
const Register = React.lazy(() => import("../pages/authentication/Register"));

export const appRoutes = [
  { linkLabel: "Dashboard", path: "/", component: Index, isProtected: true },
  { linkLabel: "Tasks", path: "/tasks", component: Tasks, isProtected: true },

  // Auth Routes
  { linkLabel: "Login", path: "/login", component: Login, isAuthRoute: true },
  { linkLabel: "Register", path: "/register", component: Register, isAuthRoute: true },
];
