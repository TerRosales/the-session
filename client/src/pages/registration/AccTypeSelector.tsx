import React from "react";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { globalStyles } from "../../global.ts"; // Import your global styles

interface AccTypeSelectorProps {
  accountType: "HOST" | "INSTRUCTOR" | "LEARNER/PARTICIPANT/GUEST";
  setAccountType: (
    value: "HOST" | "INSTRUCTOR" | "LEARNER/PARTICIPANT/GUEST"
  ) => void;
}

const AccTypeSelector: React.FC<AccTypeSelectorProps> = ({
  accountType,
  setAccountType,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <Typography
        sx={{ ...globalStyles.textSubTitle, color: theme.palette.text.primary }}
      >
        Select Account Type:
      </Typography>
      <div style={{ display: "inline-flex", gap: "10px" }}>
        {["HOST", "INSTRUCTOR", "LEARNER/PARTICIPANT/GUEST"].map((type) => (
          <Button
            key={type}
            onClick={() => setAccountType(type as any)}
            sx={{
              ...globalStyles.globalButton,
              backgroundColor:
                accountType === type
                  ? isLightMode
                    ? theme.palette.common.black // Active state color in light mode
                    : theme.palette.primary.main
                  : "transparent", // Default background color
              color:
                accountType === type
                  ? theme.palette.getContrastText(
                      isLightMode
                        ? theme.palette.common.black
                        : theme.palette.primary.main
                    )
                  : theme.palette.text.primary, // Unselected button text color
              border:
                accountType === type
                  ? "none"
                  : `1px solid ${theme.palette.divider}`, // Border for unselected buttons
              borderRadius: 0, // Remove border radius
              "&:hover": {
                backgroundColor:
                  accountType === type
                    ? isLightMode
                      ? theme.palette.common.black
                      : theme.palette.primary.dark
                    : theme.palette.action.hover, // Hover state color
                boxShadow:
                  accountType === type
                    ? "0 3px 6px rgba(0, 0, 0, 0.1)"
                    : "0 3px 6px rgba(0, 0, 0, 0.1), 0 0 12px 4px rgba(165, 105, 189, 0.5)", // Apply glow effect on hover
                transform:
                  accountType === type
                    ? "translateY(-4px)"
                    : "translateY(-2px)", // Lift effect on hover
              },
              ...globalStyles.glowEffect, // Apply glow effect
            }}
            className={accountType === type ? "active" : ""}
          >
            {type}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AccTypeSelector;
