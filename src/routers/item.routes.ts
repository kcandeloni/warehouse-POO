import { Router } from "express";
import { getAllItemsController } from "../useCases/getAllItems";
import { createItemController } from "../useCases/createItem";

const itemRouter = Router();

itemRouter
  .get("/items", (req, res) => getAllItemsController.handle(req, res))
  .post("/items", (req, res) => createItemController.handle(req, res));

export default itemRouter;
