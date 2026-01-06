import type { Request, Response } from "express";
import { Product } from "../models/product.js";

export async function createProduct(req: Request, res: Response) {
  try {
    const { title, price, userId, media } = req.body;
    const product = await Product.create({ title, price, userId, media });
    return res
      .status(201)
      .json({ message: "محصول با موفقیت ساخته شد", product });
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await Product.findAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await Product.findProductById(id as string);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await Product.update(id as string, {...req.body});
    return res
      .status(200)
      .json({ message: "محصول با موفقیت ویرایش شد", product });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const product = await Product.delete(id as string);
    return res.status(200).json({ message: "محصول با موفقیت حذف شد", product });
  } catch (error) {
    return res.status(500).json({ message: "خطایی رخ داده است" });
  }
}
