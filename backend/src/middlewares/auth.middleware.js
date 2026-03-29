import { verifyJwtToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Login required",
    });
  }

  try {
    const decoded = verifyJwtToken(token);
    console.log("...................")
    console.log({ decoded });

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
