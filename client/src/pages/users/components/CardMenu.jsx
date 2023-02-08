import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { deleteUser } from "../../../services/user.service";
import SnackBar from "../../../components/common/SnackBar";
import { useDispatch, useSelector } from "react-redux";
import { dispatchDeleteUser } from "../../../app/redux/slices/user.slice";

const CardMenu = ({ userId, open, anchorEl, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteUser = async () => {
    dispatch(dispatchDeleteUser(userId));
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
      <MenuItem onClick={handleClose}>Edit</MenuItem>
      <MenuItem onClick={() => handleDeleteUser()}>Delete</MenuItem>
    </Menu>
  );
};

export default CardMenu;
