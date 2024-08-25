import mongoose, { Document, Schema } from "mongoose";
import { calculateAge } from "../utility/calculateAge"; // Updated import

// Define the user schema
const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: false },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number },
  accountType: {
    type: String,
    required: true,
    enum: ["HOST", "INSTRUCTOR", "LEARNER/PARTICIPANT/GUEST"],
  },
  phoneNumber: { type: String, required: false },
});

// Pre-save middleware to calculate age before saving the document
userSchema.pre("save", function (next) {
  if (this.dateOfBirth instanceof Date && !isNaN(this.dateOfBirth.getTime())) {
    this.age = calculateAge(this.dateOfBirth);
  } else {
    this.age = undefined; // Or handle this case as needed
  }
  next();
});

// Create the User model
export const User = mongoose.model<UserDocument>("User", userSchema);

// TypeScript interface for User Document
export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  city?: string;
  state?: string;
  dateOfBirth: Date;
  age?: number;
  accountType: "HOST" | "INSTRUCTOR" | "LEARNER/PARTICIPANT/GUEST";
  phoneNumber?: string;
}
