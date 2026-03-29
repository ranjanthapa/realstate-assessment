import mongoose from "mongoose";


export const propertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: { type: String, required: true },
    price: { type: Number, required: true },

    status: {
      type: String,
      enum: ["available", "sold", "pending"],
      default: "available",
    },

    location: { type: String, required: true },

  },
  { timestamps: true }
);

export const Property = mongoose.model("Property", propertySchema);
