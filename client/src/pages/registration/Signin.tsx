import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { globalStyles } from "../../global.ts";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin: React.FC = () => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        ...globalStyles.pageContainer,
        paddingX: { xs: 1, sm: 4 },
        paddingY: { xs: 6, sm: 14, lg: 20 },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        height: "auto",
        minHeight: "75vh",
      }}
    >
      <Box
        sx={{
          padding: "20px 20px",
          boxShadow: theme.shadows[2],
          width: "100%",
          maxWidth: "400px",
          borderRadius: "12px",
          backgroundColor: isLightMode ? "#fff" : theme.palette.primary.main,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: isLightMode ? "#000" : "#fff" }}
        >
          Sign In
        </Typography>

        <form>
          <section className="signinForm flex flex-col gap-4 mb-5">
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="textField-focused"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={formData.username}
              onChange={handleChange}
              required
              className="textField-focused"
            />
          </section>
          <Button
            variant="contained"
            sx={{
              ...globalStyles.glowEffect,
              backgroundColor: isLightMode
                ? theme.palette.primary.main
                : "#fff",
              color: isLightMode ? "#fff" : theme.palette.primary.main,
            }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signin;
