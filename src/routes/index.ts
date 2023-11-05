import { Request, Response, Router } from "express";
import assassinoRoutes from "./assassino";
import express from 'express';
import path from 'path';

const router = express.Router();

const routes = Router();

router.get('/google_verification.html', (req, res) => {    
    const arquivoVerificacao = path.join(__dirname, './googleaa16c7ab4b42f18e.html');
    res.sendFile(arquivoVerificacao);
  });

routes.get("/", (req:Request, res:Response) =>{
    return res.json("funcionando!!!");
});

routes.use(assassinoRoutes)

export default routes;