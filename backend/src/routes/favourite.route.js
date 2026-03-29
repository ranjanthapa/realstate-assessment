import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  addToFavouriteController,
  removeFavouriteController,
  getMyFavouritesController,
} from "../controllers/favourite.controller.js";

const favRouter = express.Router();

favRouter.post("/:propertyId", authMiddleware, addToFavouriteController);
favRouter.delete("/:propertyId", authMiddleware, removeFavouriteController);
favRouter.get("/", authMiddleware, getMyFavouritesController);

export default favRouter;
