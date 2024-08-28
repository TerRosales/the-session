import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { globalStyles } from "../../global.ts";

interface TermsAndConditionsProps {
  onClose: () => void;
  onAgree: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onClose,
  onAgree,
}) => {
  const theme = useTheme();
  const isLightMode = theme.palette.mode === "light";

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: isLightMode ? "background.paper" : "#0a090a",
        color: isLightMode ? "text.primary" : "#fff",
        borderRadius: 2,
        maxWidth: "700px",
        margin: "0 auto",
        overflowY: "auto",
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Terms and Conditions
      </Typography>

      <Divider sx={{ mb: 4 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        General Disclaimer
      </Typography>
      <Typography paragraph>
        By using our platform, you agree that we are not responsible for any
        accidents or injuries that may occur during any events or activities
        organized through our platform. All users are required to electronically
        sign a waiver that releases us from any liability or legal claims.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        For Hosts
      </Typography>
      <Typography paragraph>
        As a host, you agree to organize and host small events. We are not
        responsible for any damages to your venue or surrounding property. It is
        your responsibility to ensure that your facility is insured for
        liability. By agreeing to these terms, you confirm that your facility is
        properly insured and that you assume full responsibility for any
        incidents that occur at your venue.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        For Instructors
      </Typography>
      <Typography paragraph>
        As an instructor, you are required by law to provide proof of liability
        insurance and any necessary permits to operate in public spaces or to
        use any sound equipment (e.g., speakers) during your classes or events.
        Failure to provide these documents may result in the cancellation of
        your classes or events. You agree to assume full responsibility for
        complying with all legal requirements.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" sx={{ mb: 2 }}>
        For Learners and Guests
      </Typography>
      <Typography paragraph>
        If you are under the age of 7, you will only be taught low-risk moves. A
        parent or guardian must sign a waiver before you can sign up for any
        event. This waiver acknowledges that the platform is not responsible for
        any accidents or injuries that may occur. This requirement applies to
        all users regardless of age.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography paragraph sx={{ mt: 2 }}>
        By clicking "Agree," you confirm that you have read, understood, and
        agree to abide by all the terms and conditions outlined above. Failure
        to comply with these terms may result in termination of your account and
        access to our platform.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={globalStyles.glowEffect}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onAgree}
          sx={globalStyles.glowEffect}
        >
          Agree
        </Button>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
