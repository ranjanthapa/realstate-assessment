import express from "express";

import {
  loginController,
  signupController,
} from "../controllers/auth.controller.js";

import validateBody from "../middlewares/req-body.validate.middleware.js";

import { createUserSchema } from "../dtos/user.dto.js";
import { LoginSchema } from "../dtos/login.dto.js";

const authRouter = express.Router();

authRouter.post("/sign-up", validateBody(createUserSchema), signupController);

authRouter.post("/login", validateBody(LoginSchema), loginController);

export default authRouter;
