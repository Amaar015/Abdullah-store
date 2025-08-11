import mongoose, { mongo } from "mongoose";
import product from "./product";
import { shipping } from "../../client/src/data/data";

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      // price per product like if user select 2 than show here selected product double price
      price_at_purchase: {
        type: Number,
        required: true,
      },
    },
  ],
  shipping: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postal_code: {
      type: String,
      required: true,
    },
    phone_no: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
  },
  total_amount: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  payment_method: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);

export default Order;
