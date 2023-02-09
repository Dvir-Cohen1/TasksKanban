import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useDispatch } from "react-redux";
import { dispatchDeleteUser } from "../../../app/redux/slices/user.slice";
import { Link } from "react-router-dom";

const CardMenu = ({ user, open, anchorEl, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    dispatch(dispatchDeleteUser(user._id));
    handleClose();
  };

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
      <Link to={{ pathname: "/profile", search: `?id=${user._id}` }}>
        <MenuItem onClick={handleClose}>View</MenuItem>
      </Link>
      <MenuItem onClick={handleClose}>Edit</MenuItem>
      <MenuItem onClick={() => handleDeleteUser()}>Delete</MenuItem>
    </Menu>
  );
};

export default CardMenu;
