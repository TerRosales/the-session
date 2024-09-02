import express from "express";
import { signup, signin } from "../controllers/auth.controller";

const router = express.Router();

// Define auth routes
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
