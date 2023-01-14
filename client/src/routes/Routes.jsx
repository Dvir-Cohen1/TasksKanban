import React, { Suspense } from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { appRoutes, authRoutes } from "./_routes";
import { useSelector } from "react-redux";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Login";

const ProtectedRoute = ({ children }) => {
  // const { isAuth } = useSelector((state) => state.auth);
  // return isAuth ? children : <Navigate to="/login" replace />;
};

const RouterWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {appRoutes.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={
                route.isProtected ? (
                  <ProtectedRoute>
                    <route.component />
                  </ProtectedRoute>
                ) : (
                  <route.component />
                )
              }
              key={index}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

// const NavbarLayout = () => {
//   return (
//     <>
//       <nav>
//         {appRoutes.map((route, index) => (
//           <Link key={index} to={route.path}>
//             {route.linkLabel}
//           </Link>
//         ))}
//       </nav>
//       <Suspense fallback={<h1>Loading..</h1>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

export default RouterWrapper;
