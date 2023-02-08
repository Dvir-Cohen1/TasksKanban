import React, { useEffect, createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const SnackbarContext = createContext();

export function useSnackbar() {
  return useContext(SnackbarContext);
}

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarProvider({ children }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (userState.message) {
      setSnackbarOpen(true);
    }
  }, [userState.message, message]);

  return (
    <SnackbarContext.Provider
      value={{ snackbarOpen, setSnackbarOpen, message, setMessage }}
    >
      {children}
      <Snackbar
        TransitionComponent={SlideTransition}
        autoHideDuration={6000}
        open={snackbarOpen || userState.snackbarOpen}
        message={message || userState.message}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          severity={userState.isError ? "warning" : "success"}
          sx={{ width: "100%" }}
        >
          {message || userState.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
