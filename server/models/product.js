import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    price_before: {
      type: Number,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    variety: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "At least one image is required",
      },
    },
    size: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      default: [],
    },
    color: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    benefits: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("product", productSchema);
