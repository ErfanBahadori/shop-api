import { Router } from "express";

import { saveMedia, getAllMedia, deleteMedia } from "../controllers/media.js";

import { mediaBodySchema, mediaIdParamsSchema } from "../validation/media.js";

import { zodMiddleware } from "../middleware/zod-middleware.js";

const router = Router();

/**
 * @swagger
 * /media:
 *   get:
 *     summary: Get all media files
 *     tags: 
 *        - Media
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
 *                  url:
 *                     type: string
 *                     example: "www.imgUrl.com" 
 *             
 */
router.get("/", getAllMedia);
/**
 * @swagger
 * /media:
 *   post:
 *     summary: Save a media file
 *     tags: 
 *        - Media
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - url
 *           properties:
 *             url:
 *               type: string
 *               example: www.imageUrl.com
 *             
 *     responses:
 *       201:
 *         description: فایل با موفقیت ذخیره شد
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               value: "فایل با موفقیت ذخیره شد"
 *             media:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukui0hi"
 *                  url:
 *                     type: string
 *                     example: "www.imgUrl.com" 
 *             
 */
router.post("/", zodMiddleware({ schema: mediaBodySchema }), saveMedia);
/**
 * @swagger
 * /media/{id}:
 *   delete:
 *     summary: Delete a media file
 *     tags: 
 *        - Media
 *     parameters:
 *        - in: query
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *            example: cmk3r3taf0000q4v5cukui0hi
 *     responses:
 *       200:
 *         description: فایل با موفقیت حذف شد
 *         schema:
 *             type: object
 *             properties:
 *                message:
 *                    type: string
 *                    value: "فایل با موفقیت حذف شد"
 *             
 */
router.delete(
  "/:id",
  zodMiddleware({ schema: mediaIdParamsSchema, selectData: "params" }),
  deleteMedia
);

export default router;
