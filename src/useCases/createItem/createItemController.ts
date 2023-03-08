import { Request, Response } from "express";
import { CreateItemService } from "./createItemsService";

export class CreateItemController {
  constructor(private createItemsService: CreateItemService) {}

  handle(req: Request, res: Response): Response {
    const { name, amount, category} = req.body;

    this.createItemsService.execute({ name, amount, category }); 
    return res.sendStatus(201);
  }
}
