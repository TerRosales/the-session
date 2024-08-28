// StepThree.tsx

import React from "react";
import {
  Grid,
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormValues } from "./Signup"; // Import the FormValues interface

interface StepThreeProps {
  formValues: FormValues;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const StepThree: React.FC<StepThreeProps> = ({
  formValues,
  handleInputChange,
  setFormValues,
}) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ pt: 6, pb: 2 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
            className="textField-focused"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={formValues.showPassword ? "text" : "password"}
            value={formValues.password}
            onChange={handleInputChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setFormValues({
                        ...formValues,
                        showPassword: !formValues.showPassword,
                      })
                    }
                    edge="end"
                  >
                    {formValues.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="textField-focused"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={formValues.showPassword ? "text" : "password"}
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            required
            className="textField-focused"
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              mb: 2,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.textUpdates}
                  onChange={handleInputChange}
                  name="textUpdates"
                />
              }
              label="Sign up for text updates"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.newsletter}
                  onChange={handleInputChange}
                  name="newsletter"
                />
              }
              label="Sign up for newsletter"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepThree;
