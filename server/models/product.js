import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    default: 0,
  },
  category: { type: String },
  variety: { type: String },
  images: [{ type: String }],
  size: [{ type: String }],
  color: { type: String },
  description: { type: String },
  benefits: [{ type: String }],
  inCart: { type: Boolean },
});

const Products = mongoose.model("products", productSchema);

export default Products;
