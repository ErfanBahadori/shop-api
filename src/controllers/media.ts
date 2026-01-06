import type { Request, Response } from "express";
import { Media } from "../models/media.js";

export async function saveMedia(req: Request, res: Response) {
  try {
    const { url } = req.body;
    const media = await Media.save(url);
    return res.status(201).json({ message: "فایل با موفقیت ذخیره شد", media });
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}

export async function getAllMedia(req: Request, res: Response) {
  try {
    const media = await Media.findAllMedia();
    return res.status(200).json(media);
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}

export async function deleteMedia(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const media = await Media.delete(id as string);
    return res.status(200).json({ message: "فایل با موفقیت حذف شد", media });
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}
