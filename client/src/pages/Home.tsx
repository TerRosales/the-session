import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UpcomingEvent from "../components/UpcomingEvent.tsx";
import { globalStyles } from "../global.ts";
import { events } from "../utility/data.ts"; // Import the events data

const Home: React.FC = () => {
  const theme = useTheme();

  const handleEventClick = () => {
    console.log("Event clicked!");
    // Navigate to event details page or perform any other action
  };

  return (
    <Box
      sx={{
        ...globalStyles.pageContainer,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" sx={globalStyles.textTitle}>
        Welcome to The Session
      </Typography>
      <Typography
        variant="h6"
        sx={{
          ...globalStyles.textStatement,
        }}
      >
        "The Session" is a movement by dancers, for dancers—a community built to
        unite and elevate every artist. It's more than a platform; it's where
        passion meets purpose. Here, motivated dancers share their skills, guide
        the next generation, and inspire growth at every level. Join us to break
        boundaries, support each other, and keep the art of dance alive. This is
        where real dancers rise, together.
      </Typography>

      <Typography
        component="h2"
        sx={{
          ...globalStyles.textSubTitle,
        }}
      >
        Upcoming Sessions
      </Typography>

      <Grid container sx={{ mt: 4 }} spacing={4} justifyContent="center">
        {events.slice(0, 3).map((event) => (
          <Grid item key={event.id} xs={12} sm="auto">
            <UpcomingEvent
              title={event.title}
              date={event.date}
              description={event.description}
              imageUrl={event.image} // Pass the imageUrl prop
              onClick={handleEventClick}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          ...globalStyles.sectionContainer,
        }}
      >
        <Typography variant="h4" sx={globalStyles.textSubTitle}>
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
