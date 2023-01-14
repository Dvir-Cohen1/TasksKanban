import React from "react";
import Box from "@mui/material/Box";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="main">
      <Box>
        <Navbar />
        {children}
      </Box>
      <Sidebar />
    </main>
  );
};

export default Layout;
