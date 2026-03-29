import mongoose from "mongoose";
import dotenv from "dotenv";
import { Property } from "../models/property.model.js";
import { properties } from "../data/properties.js";
import connectDB from "../config/db.js";
dotenv.config();

const seedProperties = async () => {
  try {
    connectDB();

    await Property.deleteMany();
    console.log("Old properties removed");

    const inserted = await Property.insertMany(properties);

    console.log(`${inserted.length} properties inserted`);

    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedProperties();
