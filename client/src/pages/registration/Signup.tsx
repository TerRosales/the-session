import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccTypeSelector from "./AccTypeSelector";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import InitialAgreementModal from "./InitialAgreementModal.tsx";
import { globalStyles } from "../../global.ts";
import "../registration/styles/registration.css";

export interface FormValues {
  accountType: "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST";
  username: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  textUpdates: boolean;
  newsletter: boolean;
  showPassword: boolean;
}

const steps = ["Select Account Type", "Enter Details", "Create Account"];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<FormValues>({
    accountType: "HOST",
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  const validatePassword = (): string[] => {
    const errors: string[] = [];

    if (formValues.password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(formValues.password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(formValues.password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(formValues.password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(formValues.password)) {
      errors.push("Password must contain at least one special character.");
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.push("Passwords do not match.");
    }

    return errors;
  };

  const validateName = (name: string): string[] => {
    const errors: string[] = [];
    if (/\d/.test(name)) {
      errors.push("Name cannot contain numbers.");
    }
    return errors;
  };

  const validateAge = (): string[] => {
    const errors: string[] = [];
    const today = new Date();
    const birthDate = new Date(formValues.dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 7) {
      errors.push("You must be at least 7 years old to register.");
    } else if (age > 120) {
      errors.push("You must be less than 120 years old to register.");
    }

    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedFormValues = {
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormValues(updatedFormValues);

    console.log(`Field ${name} updated:`, value);
    console.log("Current Form Values:", updatedFormValues);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      setIsModalOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleConfirmAndCloseModal = () => {
    setIsModalOpen(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordErrors = validatePassword();
    const firstNameErrors = validateName(formValues.firstName);
    const lastNameErrors = validateName(formValues.lastName);
    const ageErrors = validateAge();

    const errors = [
      ...passwordErrors,
      ...firstNameErrors,
      ...lastNameErrors,
      ...ageErrors,
    ];

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          username: formValues.username,
          email: formValues.email,
          password: formValues.password,
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          city: formValues.city,
          state: formValues.state,
          dateOfBirth: formValues.dateOfBirth,
          accountType: formValues.accountType,
          phoneNumber: formValues.phoneNumber,
        }
      );

      console.log("Signup successful:", response.data);
      alert("Signup successful!");

      // Optional: Reset form or redirect user
      setFormValues({
        accountType: "HOST",
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
      setActiveStep(0);
    } catch (error: any) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert(
        error.response?.data?.message ||
          "An error occurred during signup. Please try again."
      );
    }
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
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px 10px",
          boxShadow: theme.shadows[2],
          width: "100%",
          maxWidth: "600px",
          borderRadius: "12px",
          backgroundColor: isLightMode ? "#fff" : theme.palette.primary.main,
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
            accountType={formValues.accountType}
            setAccountType={(
              type: "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST"
            ) => setFormValues({ ...formValues, accountType: type })}
          />
        )}

        {activeStep === 1 && (
          <StepTwo
            formValues={formValues}
            handleInputChange={handleInputChange}
          />
        )}

        {activeStep === 2 && (
          <StepThree
            formValues={formValues}
            handleInputChange={handleInputChange}
            setFormValues={setFormValues}
          />
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

      <InitialAgreementModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Account Type Selected"
        description={`As a <span style="font-weight: bold;">${formValues.accountType}</span> you must agree to these initial terms and conditions before proceeding.`}
        confirmButtonText="Confirm"
        onConfirm={handleConfirmAndCloseModal}
        accountType={
          formValues.accountType.toLowerCase() as
            | "guest"
            | "learner"
            | "host"
            | "instructor"
        }
      />
    </Box>
  );
};

export default Signup;
