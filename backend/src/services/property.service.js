import { Property } from "../models/property.model.js";

export const getAll = async () => {
  return await Property.find().sort({ createdAt: -1 });
};
