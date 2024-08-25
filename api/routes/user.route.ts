import express from "express";
import { getUser } from "../controllers/user.controller";

const router = express.Router();

// Define user routes
router.get("/:id", getUser);

export default router;
