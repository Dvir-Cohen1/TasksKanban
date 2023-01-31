import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="main">
      <Box>
        <Navbar />
        <Suspense fallback={<h1>Loading..</h1>}>
          <Outlet />
        </Suspense>
      </Box>
    </main>
  );
};

export default Layout;
