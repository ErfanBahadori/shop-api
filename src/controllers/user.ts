import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";

export async function registerUser(req: Request, res: Response) {
  try {
    const { phoneNumber, name, password } = req.body;
    const existingUser = await User.findByPhoneNumber(phoneNumber);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "کاربر با این شماره تلفن وجود دارد" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      password: hashedPassword,
      phone_number: phoneNumber.toString(),
    });
    return res.status(201).json({ message: "کاربر با موفقیت ساخته شد", user });
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}
