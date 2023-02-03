import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth);

  return (
    <main className="main">
      <Box>
        {isAuth && <Navbar />}
        <Suspense fallback={<h1>Loading..</h1>}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
  );
};

export default Layout;
