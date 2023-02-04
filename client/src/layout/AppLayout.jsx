import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./Main/MainContent";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import DrawerHeader from "../components/DrawerHeader";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const Layout = () => {
  const [open, setOpen] = React.useState(false);
  const { isAuth } = useSelector((state) => state.auth);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box component={"section"} className={"content"} sx={{ display: "flex" }}>
      <CssBaseline />

      {isAuth && <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />}

      {isAuth && (
        <Sidebar
          open={open}
          setOpen={setOpen}
          DrawerHeader={DrawerHeader}
          drawerWidth={drawerWidth}
        />
      )}

      <MainContent
        DrawerHeader={DrawerHeader}
        Outlet={Outlet}
        drawerWidth={drawerWidth}
      ></MainContent>
    </Box>
  );
};

export default Layout;
