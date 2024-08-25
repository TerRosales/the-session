// ./api/index.ts
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/user.route";

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app: Application = express();

// Define the port number from the environment variables or use 5000 as a fallback
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // Connect to MongoDB using Mongoose
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });

  // Define a basic route to check if the server is running
  app.get("/", (req: Request, res: Response) => {
    res.send("Backend is up and running with MongoDB!");
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
