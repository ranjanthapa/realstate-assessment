import mongoose from "mongoose";

export const Role = {
  Buyer: "buyer",
  Seller: "seller",
};

export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: Object.values(Role),
    default: Role.Buyer,
  },
});
export const User = mongoose.model("User", userSchema);
