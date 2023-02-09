import React from "react";

const Tasks = React.lazy(() => import("../pages/tasks/Tasks"));
const Index = React.lazy(() => import("../pages/Index"));
const Users = React.lazy(() => import("../pages/users/Users"));
const UserProfile = React.lazy(() => import("../pages/users/UserProfile"));

// Auth
const Login = React.lazy(() => import("../pages/authentication/Login"));
const Register = React.lazy(() => import("../pages/authentication/Register"));

export const appRoutes = [
  { linkLabel: "Dashboard", path: "/", component: Index, isProtected: true },
  { linkLabel: "Users", path: "/users", component: Users, isProtected: true },
  { linkLabel: "Tasks", path: "/tasks", component: Tasks, isProtected: true },
  {
    linkLabel: "Profile",
    path: "/profile",
    component: UserProfile,
    isProtected: true,
    isAuthRoute: true,
  },

  // Auth Routes
  { linkLabel: "Login", path: "/login", component: Login, isAuthRoute: true },
  {
    linkLabel: "Register",
    path: "/register",
    component: Register,
    isAuthRoute: true,
  },
];
