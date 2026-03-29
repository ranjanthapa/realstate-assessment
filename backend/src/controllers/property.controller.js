import {
  getAll
} from "../services/property.service.js";

export const getProperties = async (req, res, next) => {
  try {
    const properties = await getAll();
    return res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};
