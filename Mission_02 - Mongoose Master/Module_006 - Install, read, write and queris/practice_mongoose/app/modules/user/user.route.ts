import express from "express";
import { createUser, getUser, getUsers } from "./user.controller";
const router = express.Router();

router.route("/").post(createUser).get(getUsers);
router.route("/:id").get(getUser);

export default router;
