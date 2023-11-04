import { Request, Response, Router } from "express";
import assassinoRoutes from "./assassino";

const routes = Router();

routes.get("/", (req:Request, res:Response) =>{
    return res.json("funcionando!!!");
});

routes.use(assassinoRoutes)

export default routes;