import React from "react";
import IconButton from "@mui/material/IconButton";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import ModeNightSharpIcon from "@mui/icons-material/ModeNightSharp";

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
      className="themeToggler"
      sx={{
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
        "&:active": {
          animation: "subtleScale 0.3s ease forwards",
        },
      }}
    >
      {darkMode ? <LightModeSharpIcon /> : <ModeNightSharpIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
