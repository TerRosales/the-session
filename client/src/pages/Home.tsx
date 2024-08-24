import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: theme.palette.background.default, // Apply the background color from the theme
        minHeight: "100vh",
        color: theme.palette.text.primary, // Apply the text color from the theme
      }}
    >
      <Typography variant="h3">Welcome to THE HOME PAGE</Typography>
      {/* Additional content */}
    </Box>
  );
};

export default Home;
