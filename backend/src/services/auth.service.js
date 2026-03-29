import bcrypt from "bcrypt";
import { generateJwtToken } from "../utils/jwt.js";
import { findByEmail } from "./user.service.js";

export const login = async (loginDto) => {
  const user = await findByEmail(loginDto.email);

  if (!user) {
    throw new ApiError("User not found", 401);
  }

  const isPasswordMatched = await bcrypt.compare(
    loginDto.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new ApiError("Invalid Password", 401);
  }

  const { id, email, name, role } = user;

  const jwtToken = generateJwtToken({ id, email, role });

  return { id, name, role, jwtToken };
};
