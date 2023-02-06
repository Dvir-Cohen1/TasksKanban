import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./Main/MainContent";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import DrawerHeader from "./Sidebar/DrawerHeader";
import { useSelector } from "react-redux";

const Layout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <Box component={"section"} className={"content"} sx={{ display: "flex" }}>
      <CssBaseline />
      {isAuth && <Navbar />}
      {isAuth && <Sidebar DrawerHeader={DrawerHeader} />}
      <MainContent DrawerHeader={DrawerHeader} Outlet={Outlet} />
    </Box>
  );
};

export default Layout;
