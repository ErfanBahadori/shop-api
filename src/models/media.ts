import { prisma } from "../lib/prisma.js";

export class Media {
  static async save(url: string) {
    const media = await prisma.media.create({
      data: {
        url,
      },
    });
    return media;
  }

  static async findAllMedia() {
    const media = await prisma.media.findMany();
    return media;
  }

  static async delete(id: string) {
    const media = await prisma.media.delete({
      where: {
        id,
      },
    });
  }
}
