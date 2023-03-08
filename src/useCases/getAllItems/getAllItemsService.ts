import { IItemDTO } from "../../DTO/ItemDTO";
import { AbstractItemRepositpry } from "../../repositories/AbstractItemRepository";

export class GetAllItemsService {
  constructor(private itemRepository: AbstractItemRepositpry<number>) {}

  async execute(): Promise<IItemDTO<number>[]> {
    return await this.itemRepository.getAll();
  }
}