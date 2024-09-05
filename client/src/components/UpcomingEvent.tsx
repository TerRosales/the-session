import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { globalStyles } from "../global.ts";
import "../pages/styles/Home.css";

interface UpcomingEventProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  title,
  date,
  description,
  imageUrl,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: "12px", // Slightly increased for more depth
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText(theme.palette.primary.main),
        marginBottom: 4,
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        width: { xs: "100%", sm: "350px" },
        height: { xs: "auto" },
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow:
          theme.palette.mode === "light"
            ? "0 4px 15px rgba(0, 0, 0, 0.15), 0 0 10px rgba(255, 255, 255, 0.1)" // Deeper shadow with a subtle inner glow effect
            : "0 4px 15px rgba(0, 0, 0, 0.6), 0 0 10px rgba(255, 255, 255, 0.2)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow:
            theme.palette.mode === "light"
              ? "0 6px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(255, 255, 255, 0.15)" // Stronger shadow and glow on hover
              : "0 6px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(255, 255, 255, 0.25)",
        },
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "12px 12px 0 0", // Matching the card's rounded corners
          marginBottom: 2,
        }}
      />
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
        sx={globalStyles.glowEffect}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default UpcomingEvent;
