import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "admin", "seller"],
      default: "customer",
    },
    image: {
      type: String,
      default: "",
    },
    otp: {
      type: String,
    },
    otp_expiry_time: {
      type: Date,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;

//1:N → Users → Orders

// 1:N → Users → Reviews

// 1:N → Users → Cart Items

// 1:N → Users → Wishlist
