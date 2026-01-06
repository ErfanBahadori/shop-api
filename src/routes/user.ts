import { Router } from "express";

import { registerUser } from "../controllers/user.js";

import { userBodySchema } from "../validation/user.js";

import { zodMiddleware } from "../middleware/zod-middleware.js";

const router = Router();

router.post(
  "/register",
  zodMiddleware({ schema: userBodySchema }),
  registerUser
);

export default router;
