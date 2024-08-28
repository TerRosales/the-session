import React from "react";
import { Grid, TextField } from "@mui/material";

interface StepTwoProps {
  formValues: {
    username: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    dateOfBirth: string;
    phoneNumber: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ formValues, handleInputChange }) => {
  return (
    <Grid container spacing={2} sx={{ py: 5 }}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          required
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
          required
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
          required
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="City"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="State"
          name="state"
          value={formValues.state}
          onChange={handleInputChange}
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
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
          className="textField-focused"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone Number"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="textField-focused"
        />
      </Grid>
    </Grid>
  );
};

export default StepTwo;
