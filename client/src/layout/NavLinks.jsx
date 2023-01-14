import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { routes } from "../routes/_routes";

const NavLinks = () => {
  return (
    <>
      <nav>
        {routes.map((route, index) => (
          <Link key={index} to={route.path}>
            {route.linkLabel}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavLinks;
