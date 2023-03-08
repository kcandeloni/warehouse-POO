import prisma from "../../database/db";
import { Item } from "../../model/Item";
import { AbstractItemRepositpry } from "../AbstractItemRepository";

export class ItemRepositoryPg extends AbstractItemRepositpry<number>{
  constructor() {
    super();
  }

  async create({ name, amount, category }: Item<number>): Promise<void> {
    await prisma.items.create({
      data: {
        name,
        amount,
        category
      }
    });
  }
  async getAll(): Promise<Item<number>[]> {
    return await prisma.items.findMany();
  }
}