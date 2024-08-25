import express from "express";
import { registration, login } from "../controllers/auth.controller";

const router = express.Router();

// Define auth routes
router.post("/register", registration);
router.post("/login", login);

export default router;
