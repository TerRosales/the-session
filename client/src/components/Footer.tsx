import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box
      sx={{
        py: 7,
        px: 2,
        backgroundColor: darkMode ? "rgba(0, 0, 0, 0.919)" : "f5f5f5", // Matching background, // Use theme background
        color: theme.palette.text.primary, // Use theme text color
        textAlign: "center",
        borderTop: `2px solid ${theme.palette.divider}`, // Use theme divider for borders
        borderColor: darkMode
          ? "rgba(100, 100, 100, 0.2)" // Matching border color
          : "rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          THE SESSION
        </Typography>
        <Typography variant="body2" component="span">
          © {new Date().getFullYear()} All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
