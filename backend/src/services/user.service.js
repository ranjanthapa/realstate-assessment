import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";

export const registerUser = async (data) => {
  const { name, email, password, role } = data;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
};

export const findByEmail = async (email) => {
  return await User.findOne({ email });
};

