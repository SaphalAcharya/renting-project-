import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`);

  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Optional: stop the server if DB connection fails
  }
};

export default connectDB;