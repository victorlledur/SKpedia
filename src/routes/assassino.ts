import express from "express";
import assassinoController from "../controllers/assassino";

const routes = express.Router();

routes.post("/createassassino", assassinoController.createAssassino);
routes.get("/assassinos", assassinoController.listAssassinos);
routes.get("/assassino/:id", assassinoController.byIdAssassino);
routes.put("/assassino/:id", assassinoController.updateAssassino);
routes.delete("/assassino/:id", assassinoController.deleteAssassino);

routes.get("/countassassinos", assassinoController.countAssassinos);
routes.get("/assassinos/inicial/:letra", assassinoController.assassinosPorInicial)
routes.get("/assassinos/busca/:termo", assassinoController.buscaAssassino)
routes.get("/assassinos/categoria/:categoria", assassinoController.assassinosPorCategoria)
routes.get("/assassinosaleatorios", assassinoController.assassinosAleatorios);


export default routes;