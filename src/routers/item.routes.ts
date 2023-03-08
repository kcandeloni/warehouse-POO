import { Router } from "express";
import { getAllClientController } from "../useCases/getAllItems";

const itemRouter = Router();

itemRouter.get("/", (req, res) =>
getAllClientController.handle(req, res)

)

export default itemRouter;
