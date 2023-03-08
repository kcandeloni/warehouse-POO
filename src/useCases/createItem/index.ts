import { ItemRepositoryPg } from "../../repositories/implementationsPg/ItemRepositoryPg";
import { CreateItemService } from "./createItemsService";
import { CreateItemController } from "./createItemController";

const itemRepository = new ItemRepositoryPg();
const createItemService = new CreateItemService(itemRepository);
export const createItemController = new CreateItemController(
  createItemService
);
