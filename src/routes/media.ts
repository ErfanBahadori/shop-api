import { Router } from "express";

import { saveMedia, getAllMedia, deleteMedia } from "../controllers/media.js";

import { mediaBodySchema, mediaIdParamsSchema } from "../validation/media.js";

import { zodMiddleware } from "../middleware/zod-middleware.js";

const router = Router();

router.post("/", zodMiddleware({ schema: mediaBodySchema }), saveMedia);

router.get("/", getAllMedia);

router.delete(
  "/:id",
  zodMiddleware({ schema: mediaIdParamsSchema, selectData: "params" }),
  deleteMedia
);

export default router;
