import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
import { upload, paginationMiddleware } from "../midleware/uploads.js";

const Productrouter = Router();

// add all for midlewares but here this is not required in task

// create product
Productrouter.post("/create-product", upload.array("images", 4), createProduct);

// get all product
Productrouter.get("/get-products", paginationMiddleware, getProducts);

// get one (1) product
Productrouter.get("/get-product/:id", getProduct);
// update product
Productrouter.put("/update-product/:id", updateProduct);

// delete product
Productrouter.delete("/delete-product/:id", deleteProduct);

export default Productrouter;
