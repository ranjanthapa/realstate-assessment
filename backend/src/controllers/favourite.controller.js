import {
  addToFavourite,
  removeFavourite,
  getMyFavourites,
} from "../services/favourite.service.js";

export const addToFavouriteController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { propertyId } = req.params;

    const favourite = await addToFavourite(userId, propertyId);
    res.status(201).json({
      message: "Added to favourites",
      data: favourite,
    });
  } catch (error) {
    next(error);
  }
};

export const removeFavouriteController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { propertyId } = req.params;

    await removeFavourite(userId, propertyId);

    return res.status(200).json({
      message: "Removed from favourites",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyFavouritesController = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const favourites = await getMyFavourites(userId);

    return res.status(200).json({
      message: "Fetched favourites",
      data: favourites,
    });
  } catch (error) {
    next(error);
  }
};
