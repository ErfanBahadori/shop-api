import { Router } from "express";

import {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../controllers/product.js";

import {
  productBodySchema,
  productIdParamsSchema,
  updateProductBodySchema,
} from "../validation/product.js";

import { zodMiddleware } from "../middleware/zod-middleware.js";

const router = Router();

router.post("/", zodMiddleware({ schema: productBodySchema }), createProduct);

router.get("/", getAllProducts);

router.get(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  getProductById
);

router.put(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  zodMiddleware({ schema: updateProductBodySchema }),
  updateProduct
);

router.delete(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  deleteProduct
);

export default router;
