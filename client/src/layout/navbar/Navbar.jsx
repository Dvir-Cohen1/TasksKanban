import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ isAuth, handleLogout, open, handleDrawerOpen }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ width: open ? "85%" : "100%" }}
        position="fixed"
        open={open}
      >
        <Toolbar className="bg-slate-700/0">
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

          <div className="ml-auto">
            <Button onClick={() => handleLogout()} variant="contained">
              Log out
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
