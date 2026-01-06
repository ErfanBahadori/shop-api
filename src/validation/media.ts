import { object, string } from "zod";

export const mediaBodySchema = object({
  url: string().min(1, "لینک الزامی است"),
});

export const mediaIdParamsSchema = object({
  id: string().min(1, "شناسه فایل الزامی است"),
});
