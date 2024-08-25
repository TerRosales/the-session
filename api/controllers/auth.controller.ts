import { Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcryptjs";

// Register a new user
export const registration = async (req: Request, res: Response) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    city,
    state,
    dateOfBirth,
    accountType,
    phoneNumber,
  } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      city,
      state,
      dateOfBirth: new Date(dateOfBirth), // Ensure dateOfBirth is a Date object
      accountType,
      phoneNumber,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with the created user (without password)
    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      city: newUser.city,
      state: newUser.state,
      dateOfBirth: newUser.dateOfBirth,
      age: newUser.age,
      accountType: newUser.accountType,
      phoneNumber: newUser.phoneNumber,
      id: newUser._id,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Placeholder for login function
export const login = (req: Request, res: Response) => {
  res.send("Login endpoint");
};
