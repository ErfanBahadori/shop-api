import { prisma } from "../lib/prisma.js";

export class Product {
  static async create(data: {
    title: string;
    price: number;
    userId: string;
    media: { id: string }[];
  }) {
    const product = await prisma.product.create({
      data: {
        title: data.title,
        price: data.price,
        userId: data.userId,
        media: {
          connect: [...data.media],
        },
      },
    });
    return product;
  }
  static async findAllProducts() {
    const products = await prisma.product.findMany({
      include: {
        media: true,
      },
    });
    return products;
  }
  static async findProductById(id: string) {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        media: true,
      },
    });
    return product;
  }
  // Fix: data must have the product type
  static async update(id: string, data: any) {
    const product = await prisma.product.update({
      where: { id },
      data,
      include: {
        media: {
          select: {
            id: true,
            url: true,
          },
        },
      },
    });
    return product;
  }
  static async delete(id: string) {
    const product = await prisma.product.delete({
      where: { id },
      select: {
        id: true,
        title: true,
      },
    });
    return product;
  }
}
