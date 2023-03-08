import { Request, Response } from "express";
import { GetAllItemsService } from "./getAllItemsService";

export class GetAllItemsController {
  constructor(private getAllItemsService: GetAllItemsService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const items = await this.getAllItemsService.execute(); 
    return res.send(items).status(200);
  }
}
