import React, { useState } from "react";
import AccTypeSelector from "./AccTypeSelector";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Signup: React.FC = () => {
  const [accountType, setAccountType] = useState<
    "HOST" | "INSTRUCTOR" | "LEARNER/PARTICIPANT/GUEST"
  >("HOST");

  const theme = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Selected Account Type:", accountType);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[2],
      }}
    >
      {/* Other form fields */}

      <AccTypeSelector
        accountType={accountType}
        setAccountType={setAccountType}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: "20px",
          ...theme.typography.button,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.getContrastText(theme.palette.primary.main),
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Signup;
