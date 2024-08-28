import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // This lets our frontend talk to our backend even if they're on different ports
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";

// Load environment variables from the .env file (like secret codes we don't want to share)
dotenv.config();

// Create our Express app (kind of like setting up our store to do stuff)
const app: Application = express();

// Use port 5000 if we don't have one in our secret codes
const port = process.env.PORT || 5000;

// This lets our app understand JSON (like giving it a dictionary to look up stuff)
app.use(express.json());

// Let our frontend talk to us (CORS makes sure our frontend can get candy from our backend)
app.use(
  cors({
    origin: "http://localhost:3000", // This is where our frontend is, so we let it in
    credentials: true, // This lets us send cookies or session info if we need to
  })
);

// Start our server (like turning on the lights in our store)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // Connect to MongoDB (like opening up our database so we can store and get stuff)
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });

  // Just a simple route to check if our server is alive (like saying 'Hi!' to see if someone's there)
  app.get("/", (req: Request, res: Response) => {
    res.send("Backend is up and running with MongoDB!");
  });
});

// Hook up our routes (like adding different sections in our store for different things)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
