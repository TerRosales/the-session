import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { globalStyles } from "../../global.ts";

interface AccTypeSelectorProps {
  accountType: "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST";
  setAccountType: (value: "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST") => void;
}

// Type guard to check if a value is a function with a specific signature
const isFunction = (
  value: unknown
): value is (theme: Theme) => ReturnType<(theme: Theme) => object> => {
  return typeof value === "function";
};

const AccTypeSelector: React.FC<AccTypeSelectorProps> = ({
  accountType,
  setAccountType,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <div style={{ textAlign: "center", margin: "10% 0" }}>
      <Typography
        sx={{
          ...globalStyles.textSubTitle,
          color: theme.palette.text.primary,
          fontSize: { xs: 20, md: 24, lg: 28 },
        }}
      >
        Select Account Type:
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexDirection: {
            xs: "column",
            sm: "row",
            lg: "row",
            xl: "row",
          },
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {["HOST", "INSTRUCTOR", "LEARNER", "GUEST"].map((type) => (
          <Button
            key={type}
            onClick={() =>
              setAccountType(
                type as "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST"
              )
            }
            sx={{
              ...(isFunction(globalStyles.globalButton)
                ? globalStyles.globalButton(theme)
                : globalStyles.globalButton),
              minWidth: 130, // Ensure the minWidth is a number for compatibility
              backgroundColor:
                accountType === type
                  ? isLightMode
                    ? theme.palette.common.black
                    : "#150115" // Burgundy for dark mode
                  : "transparent",
              color:
                accountType === type
                  ? theme.palette.getContrastText(
                      isLightMode ? theme.palette.common.black : "#150115" // Adjust contrast for burgundy in dark mode
                    )
                  : theme.palette.text.primary,
              border:
                accountType === type
                  ? "none"
                  : `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              boxShadow:
                accountType === type
                  ? "0 8px 16px rgba(0, 0, 0, 0.3)" // Increase the shadow for a more lifted effect
                  : "none",
              transform:
                accountType === type
                  ? "translateY(-8px)" // Increase the vertical lift when active
                  : "none",
              "&:hover": {
                backgroundColor:
                  accountType === type
                    ? isLightMode
                      ? theme.palette.common.black
                      : "#A52A2A" // Slightly lighter burgundy on hover in dark mode
                    : theme.palette.action.hover,
                boxShadow:
                  accountType === type
                    ? "0 12px 24px rgba(0, 0, 0, 0.35)" // Enhance the shadow on hover for a more lifted effect
                    : "0 3px 6px rgba(0, 0, 0, 0.1), 0 0 12px 4px rgba(165, 105, 189, 0.5)",
                transform:
                  accountType === type
                    ? "translateY(-10px)" // Increase the vertical lift on hover
                    : "translateY(-2px)",
              },
              ...(isFunction(globalStyles.glowEffect)
                ? globalStyles.glowEffect(theme)
                : globalStyles.glowEffect),
            }}
            className={accountType === type ? "active" : ""}
          >
            {type}
          </Button>
        ))}
      </Box>
    </div>
  );
};

export default AccTypeSelector;
