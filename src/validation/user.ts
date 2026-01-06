import { object, string } from "zod";

export const userBodySchema = object({
  name: string().min(3, "اسم الزامی است"),
  password: string()
    .min(6, "رمز باید حداقل 8 کاراکتر یاشد")
    .max(12, "رمز باید حداکثر 12 کاراکتر یاشد"),
  phoneNumber: string()
    .min(11, "شماره تلفن فرمت نامعتبر دارد")
    .max(11, "شماره تلفن فرمت نامعتبر دارد")
    .startsWith("09", "شماره تلفن فرمت نامعتبر دارد"),
});
