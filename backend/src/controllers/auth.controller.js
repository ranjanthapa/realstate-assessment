import { registerUser } from "../services/user.service.js";
import { login } from "../services/auth.service.js";

export const signupController = async (req, res, next) => {
  try {
    const userDto = req.body;

    const data = await registerUser(userDto);

    res.status(201).json({
      status: "success",
      message: "user registered successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const loginDto = req.body;

    const data = await login(loginDto);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
