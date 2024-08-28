import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button, Divider, Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { globalStyles } from "../../global.ts";
import { checklistData2 } from "../../utility/data.ts"; // Import the second set of checklist data

interface InitialAgreementModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  confirmButtonText?: string;
  onConfirm?: () => void;
  onTermsAndConditions?: () => void;
  children?: React.ReactNode;
  accountType: "guest" | "learner" | "host" | "instructor"; // Add this prop
}

const InitialAgreementModal: React.FC<InitialAgreementModalProps> = ({
  open,
  onClose,
  title,
  description,
  confirmButtonText = "Confirm",
  onConfirm,
  onTermsAndConditions,
  children,
  accountType, // Accept the accountType prop
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  const [checklistItems, setChecklistItems] = useState(
    checklistData2.termsAndCondition[accountType]
  );

  // Use useEffect to update the checklistItems when accountType changes
  useEffect(() => {
    setChecklistItems(checklistData2.termsAndCondition[accountType]);
  }, [accountType]);

  const toggleChecklistItem = (id: number) => {
    setChecklistItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const areAllChecked = checklistItems.every((item) => item.checked);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "50%",
          },
          maxWidth: "500px",
          height: "70%",
          bgcolor: isLightMode ? "background.paper" : "#0a090a",
          color: isLightMode ? "text.primary" : "#fff",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflowY: "auto",
        }}
      >
        {/* Logo on Top */}
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            pt: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".2rem",
            fontSize: 30,
            color: "inherit",
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          THE SESSION
        </Typography>

        {/* Glow Effect Divider */}
        <Divider
          sx={{
            mb: 5,
            borderColor: "rgba(165, 105, 189, 0.5)",
            boxShadow: "0 0 12px 4px rgba(165, 105, 189, 0.5)",
          }}
        />

        {/* Title and Description */}
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{ mt: 2, color: "inherit" }}
        >
          {title}
        </Typography>
        <Typography
          id="modal-description"
          sx={{ mt: 2, mb: 4, color: "inherit" }}
        >
          {description}
        </Typography>

        {/* Optional Children Content */}
        {children && <Box sx={{ mb: 4, color: "inherit" }}>{children}</Box>}

        {/* Checklist Items */}
        <Box sx={{ mb: 4 }}>
          {checklistItems.map((item) => (
            <Alert
              key={item.id}
              severity={item.checked ? "success" : "warning"}
              onClick={() => toggleChecklistItem(item.id)}
              sx={{
                cursor: "pointer",
                mb: 2,
                "& .MuiAlert-message": {
                  width: "100%",
                  textAlign: "center",
                },
              }}
            >
              {item.checked
                ? `${item.text} completed successfully!`
                : `Please complete ${item.text}.`}
            </Alert>
          ))}
        </Box>

        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "center",
            gap: 2,
          }}
        >
          {areAllChecked && (
            <Button
              onClick={onTermsAndConditions}
              variant="contained"
              sx={globalStyles.glowEffect}
            >
              Terms and Conditions
            </Button>
          )}
          <Button
            onClick={areAllChecked ? onConfirm : undefined} // Only trigger onConfirm if all are checked
            variant="contained"
            sx={globalStyles.glowEffect}
            disabled={!areAllChecked} // Disable the button if not all items are checked
          >
            {confirmButtonText}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default InitialAgreementModal;
