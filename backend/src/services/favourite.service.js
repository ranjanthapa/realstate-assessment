import { Favourite } from "../models/favourite.model.js";

export const addToFavourite = async (userId, propertyId) => {
  const exists = await Favourite.findOne({ userId, propertyId });

  if (exists) {
    throw new Error("Already in favourites");
  }

  return await Favourite.create({ userId, propertyId });
};

export const removeFavourite = async (userId, propertyId) => {
  const deleted = await Favourite.findOneAndDelete({
    userId,
    propertyId,
  });

  if (!deleted) {
    throw new Error("Favourite not found");
  }

  return deleted;
};

export const getMyFavourites = async (userId) => {
  const favourites = await Favourite.find({ userId })
    .populate("propertyId")
    .sort({ createdAt: -1 });

  return favourites.map((fav) => fav.propertyId);
};
