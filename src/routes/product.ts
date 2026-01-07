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

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Get all products
 *     tags: 
 *        - Product
 *     responses:
 *       200:
 *         schema:
 *           type: array
 *           items:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukui0hi"
 *                  title:
 *                     type: string
 *                     example: "laptop" 
 *                  price:
 *                     type: integer
 *                     example: 12345 
 *                  userId:
 *                     type: string
 *                     example: cmk3r3taf0000q4v5cukaxq4d
 *                  media:
 *                     type: array
 *                     items:
 *                        type: object
 *                        properties:
 *                            id:
 *                              type: string
 *                              example: "cmk3r3taf0000q4v5cukui0hi"
 *                            url:
 *                              type: string
 *                              example: "www.imgUrl.com"
 *             
 */
router.get("/", getAllProducts);
/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a single product
 *     parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *            example: cmk3r3taf0000q4v5cukui0hi
 *     tags: 
 *        - Product
 *     responses:
 *       200:
 *         schema:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukui0hi"
 *                  title:
 *                     type: string
 *                     example: "laptop" 
 *                  price:
 *                     type: integer
 *                     example: 12345 
 *                  userId:
 *                     type: string
 *                     example: cmk3r3taf0000q4v5cukaxq4d
 *                  media:
 *                     type: array
 *                     items:
 *                        type: object
 *                        properties:
 *                            id:
 *                              type: string
 *                              example: "cmk3r3taf0000q4v5cukui0hi"
 *                            url:
 *                              type: string
 *                              example: "www.imgUrl.com"
 *             
 */
router.get(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  getProductById
);
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: 
 *        - Product
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - price
 *             - userId
 *             - media
 *           properties:
 *             title:
 *               type: string
 *               example: laptop
 *             price:
 *               type: integer
 *               example: 12345
 *             userId:
 *               type: string
 *               example: cmk2kmpjk0000r4v5jit94vaa
 *             media:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                       id:
 *                         type: string
 *                         example: "cmk3r3taf0000q4v5cukui0hi"
 *                       url:
 *                         type: string
 *                         example: "www.imgUrl.com"
 *     responses:
 *       201:
 *         description: محصول با موفقیت ساخته شد
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               value: "محصول با موفقیت ساخته شد"
 *             product:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukui0hi"
 *                  title:
 *                     type: string
 *                     example: "laptop" 
 *                  price:
 *                     type: integer
 *                     example: 12345
 *                  userId:
 *                     type: string
 *                     example: cmk2kmpjk0000r4v5jit94vaa
 *             
 */
router.post("/", zodMiddleware({ schema: productBodySchema }), createProduct);
/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Update a product
 *     tags: 
 *        - Product
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: laptop
 *             price:
 *               type: integer
 *               example: 12345
 *             userId:
 *               type: string
 *               example: cmk2kmpjk0000r4v5jit94vaa
 *             media:
 *                type: array
 *                items:
 *                   type: object
 *                   properties:
 *                       id:
 *                         type: string
 *                         example: "cmk3r3taf0000q4v5cukui0hi"
 *                       url:
 *                         type: string
 *                         example: "www.imgUrl.com"
 *     responses:
 *       200:
 *         description: محصول با موفقیت ویرایش شد
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               value: "محصول با موفقیت ویرایش شد"
 *             product:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukui0hi"
 *                  title:
 *                     type: string
 *                     example: "laptop 2" 
 *                  price:
 *                     type: integer
 *                     example: 56789
 *                  userId:
 *                     type: string
 *                     example: cmk2kmpjk0000r4v5jit94vaa
 *                  media:
 *                     type: array
 *                     items:
 *                        type: object
 *                        properties:
 *                            id:
 *                                type: string
 *                                example: "cmk3r3taf0000q4v5cukui0hi"
 *                            url:
 *                                type: string
 *                                example: "www.imgUrl.com"
 *             
 */
router.put(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  zodMiddleware({ schema: updateProductBodySchema }),
  updateProduct
);
/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: 
 *        - Product
 *     parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *            example: cmk3r3taf0000q4v5cukui0hi
 *     responses:
 *       200:
 *         description: محصول با موفقیت حذف شد
 *         schema:
 *             type: object
 *             properties:
 *                message:
 *                    type: string
 *                    value: "محصول با موفقیت حذف شد"
 *                product:
 *                    type: object
 *                    properties:
 *                        id:
 *                          type: string
 *                          example: "cmk3r3taf0000q4v5cukui0hi"
 *                        title:
 *                           type: string
 *                           example: "laptop" 
 *             
 */
router.delete(
  "/:id",
  zodMiddleware({ schema: productIdParamsSchema, selectData: "params" }),
  deleteProduct
);

export default router;
