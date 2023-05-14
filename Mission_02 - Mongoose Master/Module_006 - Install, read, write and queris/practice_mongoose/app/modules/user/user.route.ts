import express from "express";
import { createUser } from "./user.controller";
const router = express.Router();

router.route("/").get(createUser);

export default router;
