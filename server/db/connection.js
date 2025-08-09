import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection created successfully...");
  } catch (err) {
    console.error(`${err} occurred while connecting to MongoDB`);
    process.exit(1); // Exit process with failure
  }
};
