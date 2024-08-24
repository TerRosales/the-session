import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { sessions } from "../utility/data"; // Import sessions data
import "./styles/Slider.css";

const Test: React.FC = () => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sessions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sessions.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      className="sliderContainer"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        className="sliderWrapper"
        sx={{
          minHeight: "80vh",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {sessions.map((session, index) => (
          <Box
            key={session.id}
            className={`sliderSlide ${
              currentIndex === index
                ? "sliderSlideEnterActive"
                : "sliderSlideExitActive"
            }`}
            sx={{
              backgroundImage: `url(${session.image})`,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Black background with 80% opacity
                borderRadius: "10px",
                padding: "20px",
                maxWidth: "800px", // Fixed width to prevent resizing
                width: "100%", // Ensure it occupies full width within maxWidth
                textAlign: "left",
                position: "relative",
                bottom: "50px", // Move it higher by reducing the value
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, color: "#fff" }}>
                {session.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff", mb: 2 }}>
                {session.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
                {session.date} - {session.location}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc" }}>
                Instructor: {session.instructor}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <IconButton
          onClick={handlePrevious}
          sx={{
            backgroundColor: theme.palette.text.primary, // Initial background color
            color:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default, // Arrow color based on theme mode
            fontSize: "3rem", // Make the arrows larger
            width: "60px", // Make the button square
            height: "60px", // Same height for square
            transition:
              "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Add smooth transition
            "&:hover": {
              backgroundColor: theme.palette.background.default, // Flip background color
              color:
                theme.palette.mode === "light"
                  ? theme.palette.text.primary
                  : "#fff", // Flip arrow color based on theme mode
              transform: "rotate(45deg)", // Rotate the button on hover
            },
            "&:active": {
              transform: "scale(1)", // Reset scale on click
            },
          }}
        >
          <ArrowBack
            fontSize="inherit"
            sx={{
              transition: "color 0.3s ease", // Smooth color transition
              "&:hover": {
                color: "inherit", // Keep color consistent with parent
              },
            }}
          />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: theme.palette.text.primary, // Initial background color
            color:
              theme.palette.mode === "light"
                ? "#fff"
                : theme.palette.background.default, // Arrow color based on theme mode
            fontSize: "3rem", // Make the arrows larger
            width: "60px", // Make the button square
            height: "60px", // Same height for square
            transition:
              "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease", // Add smooth transition
            "&:hover": {
              backgroundColor: theme.palette.background.default, // Flip background color
              color:
                theme.palette.mode === "light"
                  ? theme.palette.text.primary
                  : "#fff", // Flip arrow color based on theme mode
              transform: "rotate(45deg)", // Rotate the button on hover
            },
            "&:active": {
              transform: "scale(1)", // Reset scale on click
            },
          }}
        >
          <ArrowForward
            fontSize="inherit"
            sx={{
              transition: "color 0.3s ease", // Smooth color transition
              "&:hover": {
                color: "inherit", // Keep color consistent with parent
              },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Test;
