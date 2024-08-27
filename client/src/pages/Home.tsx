import * as React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
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
          ...globalStyles.textSubTitle,
        }}
      >
        Upcoming Sessions
      </Typography>

      <Grid container sx={{ mt: 4 }} spacing={4} justifyContent="center">
        {events.map((event) => (
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
