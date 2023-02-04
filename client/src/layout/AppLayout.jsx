import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { setIsAuth } from "../app/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import authService from "../services/auth.service";
const Layout = () => {
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = async () => {
    const response = await authService.logout();
    if (response.error === false) {
      dispatch(setIsAuth());
    }
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <section className="left_container">
        <Sidebar open={open} handleDrawerClose={handleDrawerClose}></Sidebar>
      </section>
      <section className="right_container">
        {isAuth && (
          <Navbar
            isAuth={isAuth}
            handleLogout={handleLogout}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
          />
        )}
        <section className={"content w-full"}>
          <Suspense fallback={<h1>Loading..</h1>}>
            <Outlet />
          </Suspense>
        </section>
      </section>
    </>
  );
};

export default Layout;
