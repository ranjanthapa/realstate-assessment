import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "TECHKRAFT";

export const generateJwtToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyJwtToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
