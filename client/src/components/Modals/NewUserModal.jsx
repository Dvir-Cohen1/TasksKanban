import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchAddUser,
  clearErrorMessage,
} from "../../app/redux/slices/user.slice";

const NewUserModal = () => {
  const [open, setOpen] = React.useState(false);
  const { isLoading, error, isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function onAddUser(e) {
    e.preventDefault();
    handleClose();
    const formValues = {
      email: emailInputRef.current.value,
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatch(dispatchAddUser(formValues));
  }

  // useEffect(() => {
  //   if (!isAuth) navigate("/login");
  // }, [isAuth, navigate]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        New
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New User</DialogTitle>
        <form onSubmit={onAddUser}>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              inputRef={emailInputRef}
              onChange={(e) => {
                e.target;
              }}
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="firstName"
              inputRef={firstNameInputRef}
              onChange={(e) => {
                e.target;
              }}
              label="First Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="lastName"
              inputRef={lastNameInputRef}
              onChange={(e) => {
                e.target;
              }}
              label="Last Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="password"
              inputRef={passwordInputRef}
              onChange={(e) => {
                e.target;
              }}
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default NewUserModal;
