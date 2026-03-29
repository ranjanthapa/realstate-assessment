import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import propertyRouter from "./routes/property.route.js";
import connectDB from "./config/db.js";
import favRouter from "./routes/favourite.route.js";
import cors from "cors";

import { errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL (Vite default)
    credentials: true, // if using cookies/auth later
  }),
);
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/properties", propertyRouter);
app.use("/api/favourites", favRouter);

app.use(errorHandler);

const startServer = async () => {
  await connectDB();

  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
};

startServer();
