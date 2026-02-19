import mongoose from "mongoose";
import { MONGO_URI } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  }
}
