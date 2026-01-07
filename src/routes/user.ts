import { Router } from "express";

import { registerUser } from "../controllers/user.js";

import { userBodySchema } from "../validation/user.js";

import { zodMiddleware } from "../middleware/zod-middleware.js";

const router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register user
 *     tags: 
 *        - User
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - password
 *             - phoneNumber
 *           properties:
 *             name:
 *               type: string
 *               example: Erfan Bahadori
 *             password:
 *               type: string
 *               minLength: 6
 *               maxLength: 12
 *               example: Secret12
 *             phoneNumber:
 *               type: string
 *               minLength: 11
 *               maxLength: 11
 *               pattern: "^09[0-9]{0}$"
 *               example: "09123456789"
*     responses:
 *       201:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               value: "کاربر با موفقیت ساخته شد"
 *             user:
 *               type: object
 *               properties:
 *                  id:
 *                     type: string
 *                     example: "cmk3r3taf0000q4v5cukua3vd"
 *                  name:
 *                     type: string
 *                     example: "Erfan Bahadori"
 *                  createdAt:
 *                     type: datetime
 *                     example: 2025/11/10     
 *             
 */
router.post(
  "/register",
  zodMiddleware({ schema: userBodySchema }),
  registerUser
);

export default router;
