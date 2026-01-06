import type { NextFunction, Request, Response } from "express";
import type { ZodSchema } from "zod";

import { flattenError } from "zod";

interface ZodMiddlewareOptions {
  schema: ZodSchema;
  selectData?: "body" | "params" | "query";
}

export function zodMiddleware({
  schema,
  selectData = "body",
}: ZodMiddlewareOptions) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[selectData];

    const result = schema.safeParse(data);

    if (!result.success) {
      const zodError = flattenError(result.error);
      const fieldErrors = zodError.fieldErrors as Record<string, string[]>;

      const errors = [];

      for (const [field, messages] of Object.entries(fieldErrors)) {
        errors.push(...messages);
      }
      return res.status(400).json({
        message: "اطلاعت ورودی نامعتبر است",
        errors,
      });
    }

    next();
  };
}
