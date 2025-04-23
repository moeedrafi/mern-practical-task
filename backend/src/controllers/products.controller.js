import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Products } from "../models/products.models.js";

const getAllProducts = asyncHandler(async (_, res) => {
  const products = await Products.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products Fetched Successfully"));
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  if (!name || price === null) {
    throw new ApiError(400, "Missing Fields!");
  }

  const existingProduct = await Products.findOne({
    name: name.toLowerCase().trim(),
  });
  if (existingProduct) {
    throw new ApiError(400, "Product Already Exists");
  }

  const product = await Products.create({ name, price });

  res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully!"));
});

export { getAllProducts, createProduct };
