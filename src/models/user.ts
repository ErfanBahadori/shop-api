import { prisma } from "../lib/prisma.js";

export class User {
  static async create(data: {
    name: string;
    password: string;
    phone_number: string;
  }) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        password: data.password,
        phone_number: data.phone_number,
      },
      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });
    return user;
  }

  static async findByPhoneNumber(phone_number: string) {
    const user = await prisma.user.findUnique({
      where: {
        phone_number,
      },
    });
    return user;
  }
}
