import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UpcomingEvent from "../components/UpcomingEvent.tsx"; // Adjust the import path as necessary
import images from "../assets/images.ts";

const Home: React.FC = () => {
  const theme = useTheme();

  const handleEventClick = () => {
    console.log("Event clicked!");
    // Navigate to event details page or perform any other action
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        pt: { lg: 17 },
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: { xs: 3, sm: 4 },
          textAlign: "center",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        Welcome to The Session
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: { xs: 3, sm: 5 },
          textAlign: "center",
          maxWidth: "90%",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
        }}
      >
        Welcome to your ultimate platform for learning, connecting, and growing
        in the art of breakdancing. While we&apos;re just getting started, our
        goal is to bring you an incredible experience. Right now, you can
        explore upcoming sessions, discover new locations, and connect with
        fellow dancers worldwide. And stay tuned—exciting tutorials, events, and
        new features are coming soon! We&apos;re working hard to make this the
        go-to spot for everything breakdancing. Get ready to elevate your skills
        and join the community!
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: { xs: 3, sm: 4 },
          textAlign: "center",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "3rem" },
          borderColor: "divider",
          borderBottom: 1,
        }}
      >
        Upcoming Sessions
      </Typography>

      <Grid container sx={{ mt: 4 }} spacing={4} justifyContent="center">
        <Grid item xs={12} sm="auto">
          <UpcomingEvent
            title="Sunday Session"
            date="September 12, 2024"
            description="Join us for an epic breakdance jam with top dancers from around the world. Don't miss out!"
            onClick={handleEventClick}
          />
        </Grid>
        <Grid item xs={12} sm="auto">
          <UpcomingEvent
            title="Labor day Dance-off"
            date="August 30, 2024"
            description="Get ready for a day full of dance workshops, competitions, and fun in the sun!"
            onClick={handleEventClick}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: { xs: 6, sm: 8 },
          width: "100%",
          backgroundImage: "url('../assets/img01.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          padding: { xs: "20px", sm: "40px" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: { xs: 2, sm: 3 },
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Featured Blog Post
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          Discover the latest tips and tricks from top dancers around the world.
          Learn how to improve your skills, stay inspired, and keep moving to
          the beat!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
