// src/Footer.tsx
import * as React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 7,
        px: 2,
        backgroundColor: "background.default",
        color: "text.primary",
        textAlign: "center",
        borderTop: 1,
        borderColor: "divider",
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
