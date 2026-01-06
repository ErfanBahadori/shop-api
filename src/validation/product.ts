import { object, string, number, array } from "zod";

export const productBodySchema = object({
  title: string().min(1, "عنوان الزامی است"),
  price: number().nonnegative("قیمت نمی‌تواند منفی باشد"),
  userId: string().min(1, "شناسه کاربر الزامی است"),
  media: array(
    object({
      id: string().min(1, "شناسه مدیا الزامی است"),
    })
  ).nonempty("حداقل یک مدیا الزامی است"),
});

export const productIdParamsSchema = object({
  id: string().min(1, "شناسه محصول الزامی است"),
});

export const updateProductBodySchema = object({
  title: string().min(1, "عنوان الزامی است").optional(),
  price: number().nonnegative("قیمت نمی‌تواند منفی باشد").optional(),
  media: array(
    object({
      id: string().min(1, "شناسه مدیا الزامی است"),
    })
  )
    .nonempty("حداقل یک مدیا الزامی است")
    .optional(),
});
