import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    rating: {
      type: Number,
      enums: [1, 2, 3, 4, 5],
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const Reviews = mongoose.model("review", reviewSchema);
export default Reviews;
