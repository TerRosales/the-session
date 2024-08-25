import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../pages/styles/Home.css";

interface UpcomingEventProps {
  title: string;
  date: string;
  description: string;
  onClick: () => void;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  title,
  date,
  description,
  onClick,
}) => {
  const theme = useTheme();

  // Determine button color based on the current theme mode
  const buttonBgColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[800] // Darker color for light mode
      : theme.palette.grey[200]; // Lighter color for dark mode

  const buttonTextColor =
    theme.palette.mode === "light"
      ? theme.palette.getContrastText(theme.palette.grey[800])
      : theme.palette.getContrastText(theme.palette.grey[200]);

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "8px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        marginBottom: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 4px 20px rgba(0, 0, 0, 0.1)"
              : "0 4px 20px rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        {title}
      </Typography>
      <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
        {date}
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 3 }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: buttonBgColor,
          color: buttonTextColor,
          border: "1px solid rgba(165, 105, 189, 0.5)",
          padding: "8px 16px",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            backgroundColor: buttonTextColor,
            color: buttonBgColor,
            boxShadow:
              "0 4px 10px rgba(0, 0, 0, 0.15), 0 0 20px 5px rgba(165, 105, 189, 0.6)",
            transform: "translateY(-4px)",
            borderColor: "rgba(165, 105, 189, 1)",
          },
          "&:active": {
            animation: "semiBounce 0.4s ease, drawBorder 0.5s linear forwards",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(165, 105, 189, 1)",
          },
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default UpcomingEvent;
