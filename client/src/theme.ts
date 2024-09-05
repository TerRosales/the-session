// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f5f5f5", // A suitable light theme primary color
    },
    background: {
      default: "f5f5f5", // A gradient similar to what was intended
      paper: "#f5f5f5",
    },
    text: {
      primary: "#333333", // A softer black for text
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0b0b0b", // A suitable dark theme primary color
    },
    background: {
      default: "rgba(0, 0, 0, 0.9)", // Standard dark mode background
      paper: "#1d1d1d",
    },
    text: {
      primary: "#fff", // Ensure text is white in dark mode
    },
  },
});
