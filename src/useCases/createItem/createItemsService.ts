import { Category } from "@prisma/client";
import { AbstractItemRepositpry } from "../../repositories/AbstractItemRepository";

interface IRequestDTO {
  name: string;
  amount: number;
  category: Category;
}

export class CreateItemService {
  constructor(private itemRepository: AbstractItemRepositpry<number>) {}

  execute({ name, amount, category }: IRequestDTO): void {
    if(!Category[category]) throw new Error("Category invalid!");
    this.itemRepository.create({ name, amount, category });
  }
}