import React from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../services/auth.service";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { setIsAuth } from "../../app/redux/slices/authSlice";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Navbar = ({ open, handleDrawerOpen }) => {
  const dispatch = useDispatch();

  // Logout
  const handleLogout = async () => {
    const response = await authService.logout();
    if (response.error === false) {
      dispatch(setIsAuth());
    }
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
        <button
          className="bg-blue-600 ml-auto"
          onClick={handleLogout}
          variant="contained"
        >
          Logout
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
