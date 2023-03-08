import { Request, Response } from "express";

export class GetAllItemsController {
  constructor() {}

  handle(req: Request, res: Response): Response {
    return res.send([]);
  }
}
