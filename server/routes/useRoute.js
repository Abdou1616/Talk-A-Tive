import express from "express";
import { createUser } from "../controllers/userControler.js";

const router = express.Router();
router.route("/").post(createUser);

export default router;
