import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import App from "./app/App";
import "./assets/css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme/theme";
import LayoutProvider from "./app/context/layoutContext";
import SnackbarProvider from "./app/context/SnackbarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LayoutProvider>
            <SnackbarProvider>
              <App />
            </SnackbarProvider>
          </LayoutProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
