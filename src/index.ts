import express, { json } from "express";
import cors from "cors";
import itemRouter from "./routers/item.routes";

const app = express();
app.use(cors());
app.use(json());
app.use(itemRouter);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running in port: ${port}`));
