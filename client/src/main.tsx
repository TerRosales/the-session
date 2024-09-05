// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css"; // Import global CSS
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

export const Main = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <App darkMode={darkMode} onThemeToggle={handleThemeToggle} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
