import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
import { upload, paginationMiddleware } from "../midleware/uploads.js";

const router = Router();

// add all for midlewares but here this is not required in task

// create product
router.post("/create-product", upload.array("images", 4), createProduct);

// get all product
router.get("/get-products", paginationMiddleware, getProducts);

// get one (1) product
router.get("/get-product/:id", getProduct);
// update product
router.put("/update-product/:id", updateProduct);

// delete product
router.delete("/delete-product/:id", deleteProduct);

export default router;
