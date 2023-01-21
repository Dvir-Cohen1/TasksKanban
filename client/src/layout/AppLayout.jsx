import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  // const { pathname } = useLocation();
  // const isAuthPath = pathname == "/login" || pathname == "/register" ? true : false;
  return (
    <main className="main">
      <div>
        {children}
      </div>
      <Sidebar />
      
    </main>
  );
};

export default Layout;
