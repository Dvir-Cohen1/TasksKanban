import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const cardMenuItems = ["Edit", "Delete"];

const CardMenu = ({ open, anchorEl, handleClose }) => {
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {cardMenuItems.map((item) => {
        return <MenuItem onClick={handleClose}>{item}</MenuItem>;
      })}
    </Menu>
  );
};

export default CardMenu;
