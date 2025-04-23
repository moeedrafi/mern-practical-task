import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/products.controller.js";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/add").post(createProduct);

export default router;
