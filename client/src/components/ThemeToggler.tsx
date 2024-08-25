import React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeNightSharpIcon from "@mui/icons-material/ModeNightSharp";
import "../pages/styles/Home.css"; // Ensure this is correctly linked to your CSS

interface ThemeTogglerProps {
  onThemeToggle: (event: React.MouseEvent<HTMLElement>) => void;
  darkMode: boolean;
}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({
  onThemeToggle,
  darkMode,
}) => {
  return (
    <IconButton
      color="inherit"
      onClick={(event) => {
        event.preventDefault(); // Prevent default action if any
        onThemeToggle(event);
      }}
      className="themeToggler" // Apply the CSS class
    >
      {darkMode ? <LightModeSharpIcon /> : <ModeNightSharpIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
