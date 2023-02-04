import React, { Suspense } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Main from "../../components/Main";

const MainContent = ({ open, Outlet, DrawerHeader }) => {
  const theme = useTheme();

  return (
    <Main sx={{ ml: "0" }} open={open} theme={theme}>
      <DrawerHeader />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MainContent;
