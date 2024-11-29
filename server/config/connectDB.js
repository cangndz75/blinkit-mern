import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("MongoDB URI is not found");
}

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connection successful");
  } catch (error) {
    console.log("MongoDb connection failed");
    process.exit(1);
  }
}

export default connectDb;
