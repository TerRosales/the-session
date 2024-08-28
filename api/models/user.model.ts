import mongoose, { Document, Schema, Types } from "mongoose";
import { calculateAge } from "../utility/calculateAge";

// Define the user schema
const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: { type: String, required: [true, "Password is required"] },
    firstName: { type: String, required: [true, "First name is required"] },
    lastName: { type: String, required: [true, "Last name is required"] },
    city: { type: String, required: false },
    state: { type: String, required: false },
    dateOfBirth: { type: Date, required: [true, "Date of birth is required"] },
    age: { type: Number },
    accountType: {
      type: String,
      required: [true, "Account type is required"],
      enum: ["HOST", "INSTRUCTOR", "LEARNER", "GUEST"],
    },
    phoneNumber: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to calculate age before saving the document
userSchema.pre("save", function (next) {
  if (this.dateOfBirth instanceof Date && !isNaN(this.dateOfBirth.getTime())) {
    this.age = calculateAge(this.dateOfBirth);
  } else {
    this.age = undefined;
  }
  next();
});

// Pre-save middleware to prevent duplicate email and username
userSchema.pre("save", async function (next) {
  try {
    const existingUser = await mongoose.models.User.findOne({
      $or: [{ email: this.email }, { username: this.username }],
    });

    if (
      existingUser &&
      existingUser._id.toString() !== (this._id as Types.ObjectId).toString()
    ) {
      throw new Error("Username or email already exists");
    }

    next();
  } catch (error: any) {
    next(error);
  }
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
  accountType: "HOST" | "INSTRUCTOR" | "LEARNER" | "GUEST";
  phoneNumber?: string;
}
