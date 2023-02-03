import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import App from "./app/App";
import "./assets/css/index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./assets/theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
