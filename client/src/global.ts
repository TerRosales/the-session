import { SxProps, Theme } from "@mui/material/styles";

interface GlobalStyles {
  pageContainer: SxProps<Theme>;
  textTitle: SxProps<Theme>;
  textSubTitle: SxProps<Theme>;
  textStatement: SxProps<Theme>;
  eventGrid: SxProps<Theme>;
  sectionContainer: SxProps<Theme>;
  globalButton: SxProps<Theme>;
  glowEffect: SxProps<Theme>;
}

const glowEffect: SxProps<Theme> = (theme) => ({
  border: "1px solid rgba(165, 105, 189, 0.5)", // Thin border matching the glow
  transition:
    "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    boxShadow:
      "0 3px 6px rgba(0, 0, 0, 0.1), 0 0 12px 4px rgba(165, 105, 189, 0.5)", // Smaller shadow and glow on hover
    transform: "translateY(-4px)", // Lift effect
    borderColor: "rgba(165, 105, 189, 1)", // Make the border more prominent on hover
    ...(theme.palette.mode === "dark" && {
      backgroundColor: "var(--button-text-color)", // Flip background color only in dark mode
      color: "var(--button-bg-color)", // Flip text color only in dark mode
    }),
    ...(theme.palette.mode === "light" && {
      backgroundColor: "rgba(245, 245, 245, 0.9)", // Lighter background in light mode
      color: theme.palette.text.primary, // Ensure text is readable
    }),
  },
  "&:active": {
    animation: "semiBounce 0.4s ease, drawBorder 0.5s linear forwards", // Apply semi-bounce and draw border
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(165, 105, 189, 1)", // Ensure border is drawn
  },
  "&:focus": {
    outline: "none", // Remove the focus outline
    boxShadow: "none", // Remove the focus shadow
  },
});

export const globalStyles: GlobalStyles = {
  pageContainer: {
    paddingY: { xs: 5, sm: 10, md: 12, lg: 15 },
    paddingX: { xs: 2, sm: 4 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: { xs: 2, sm: 3 },
    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
  },
  textSubTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: { xs: 1, sm: 2, lg: 3 },
    fontSize: { xs: "1.8rem", sm: "1.9rem", md: "2rem", lg: "2.5rem" },
  },
  textStatement: {
    textAlign: "center",
    maxWidth: { xs: "90%", sm: "75%", md: "65%", lg: "60%" },
    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" },
    marginBottom: { xs: 10, sm: 12, lg: 15 },
    marginTop: 1,
    marginLeft: "auto",
    marginRight: "auto",
  },
  eventGrid: {
    marginBottom: { xs: 4, sm: 6, lg: 8 },
    maxWidth: "400px", // Set a max-width for the event cards
  },
  sectionContainer: {
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    padding: { xs: 2, sm: 4, md: 6, lg: 8 },
    marginTop: { xs: 4, sm: 6, lg: 8 },
  },
  glowEffect, // Assign the glowEffect separately
  globalButton: {
    padding: "8px 16px",
    backgroundColor: "transparent", // Set to transparent or define a default color
    ...glowEffect, // Spread the glowEffect styles here
  },
};
