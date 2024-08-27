import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccTypeSelector from "./AccTypeSelector";
import { globalStyles } from "../../global.ts";
import "../registration/styles/registration.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const steps = ["Select Account Type", "Enter Details", "Create Account"];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [accountType, setAccountType] = useState<
    "HOST" | "INSTRUCTOR" | "LEARNER/PARTICIPANT/GUEST"
  >("HOST");
  const [formValues, setFormValues] = useState({
    username: "",
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    textUpdates: false,
    newsletter: false,
    showPassword: false,
  });

  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle final form submission logic here
    console.log("Form Values:", formValues);
    console.log("Selected Account Type:", accountType);
  };

  return (
    <Box
      sx={{
        ...globalStyles.pageContainer,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          boxShadow: theme.shadows[2],
          width: "100%",
          maxWidth: "600px",
          borderRadius: "12px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    style: {
                      color:
                        activeStep > index
                          ? isLightMode
                            ? "#000"
                            : "#fff"
                          : undefined,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {activeStep === 0 && (
          <AccTypeSelector
            accountType={accountType}
            setAccountType={setAccountType}
          />
        )}

        {activeStep === 1 && (
          <Grid container spacing={2} sx={{ py: 6, px: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formValues.username}
                onChange={handleInputChange}
                required
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                required
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                required
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formValues.city}
                onChange={handleInputChange}
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formValues.state}
                onChange={handleInputChange}
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dateOfBirth"
                type="date"
                value={formValues.dateOfBirth}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
                required
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                className="textField-focused" /* Apply CSS class */
              />
            </Grid>
          </Grid>
        )}

        {activeStep === 2 && (
          <Box>
            <Grid container spacing={2} sx={{ py: 6, px: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                  className="textField-focused" /* Apply CSS class */
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
                  className="textField-focused" /* Apply CSS class */
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
                  className="textField-focused" /* Apply CSS class */
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
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: activeStep === 0 ? "flex-end" : "space-between",
            marginTop: "20px",
          }}
        >
          {activeStep > 0 && (
            <Button
              onClick={handleBack}
              variant="contained"
              sx={globalStyles.glowEffect}
            >
              Back
            </Button>
          )}
          {activeStep < steps.length - 1 && (
            <Button
              onClick={handleNext}
              variant="contained"
              sx={globalStyles.glowEffect}
            >
              Next
            </Button>
          )}
          {activeStep === steps.length - 1 && (
            <Button
              type="submit"
              variant="contained"
              sx={globalStyles.glowEffect}
            >
              Submit
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default Signup;
