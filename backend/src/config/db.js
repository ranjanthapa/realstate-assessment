import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString = process.env.CONNECTION_STRING;
    console.log(connectionString);
    console.log("is it ????")
    await mongoose.connect(connectionString);
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
