import React, { Suspense } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Main from "./Main";
import { useLayoutContext } from "../../app/context/layoutContext";

const MainContent = ({ DrawerHeader, Outlet }) => {
  const theme = useTheme();
  return (
    <Main sx={{ ml: "0" }} theme={theme}>
      <DrawerHeader />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MainContent;
