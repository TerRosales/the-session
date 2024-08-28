import React, { useState } from "react";
import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AccTypeSelector from "./AccTypeSelector";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import InitialAgreementModal from "./InitialAgreementModal.tsx";
import { globalStyles } from "../../global.ts";
import "../registration/styles/registration.css";
import { FormControlLabel, Checkbox } from "@mui/material";

const steps = ["Select Account Type", "Enter Details", "Create Account"];

const Signup: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [accountType, setAccountType] = useState<
    "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST"
  >("HOST");

  // Consolidated form values for all steps
  const [formValues, setFormValues] = useState({
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
  const [checkedItems, setCheckedItems] = useState({
    ageVerification: false,
    parentalWaiver: false,
    stretchingHabits: false,
  });

  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  // Handle input changes and track form data
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Final Form Submission:", formValues);
  };

  return (
    <Box
      sx={{
        ...globalStyles.pageContainer,
        paddingX: { xs: 1, sm: 4 },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        height: "auto",
        minHeight: "80vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px 10px",
          boxShadow: theme.shadows[2],
          width: "100%",
          maxWidth: "600px",
          minHeight: "50vh",
          borderRadius: "12px",
          backgroundColor: isLightMode
            ? "#fff" // Light background for light mode
            : "#090709", // Darker background for dark mode to make the form stand out
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
            accountType={formValues.accountType as any}
            setAccountType={(type) =>
              setFormValues({ ...formValues, accountType: type })
            }
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
        description={`You have selected the account type: ${formValues.accountType}`}
        confirmButtonText="Confirm"
        onConfirm={handleConfirmAndCloseModal}
        accountType={formValues.accountType.toLowerCase()} // Pass the account type in lowercase
      />
    </Box>
  );
};

export default Signup;
