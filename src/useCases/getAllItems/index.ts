import { ItemRepositoryPg } from "../../repositories/implementationsPg/ItemRepositoryPg";
import { GetAllItemsController } from "./getAllItemsController";
import { GetAllItemsService } from "./getAllItemsService";

const itemRepository = new ItemRepositoryPg();
const getAllItemsService = new GetAllItemsService(itemRepository);
export const getAllItemsController = new GetAllItemsController(getAllItemsService);