import express from "express";
import requestLog from "./middlewares/requestLog";
import cors from "cors"
import { prisma } from "./database/index";
import routes from "./routes/";

async function main() {
    const app = express();
    app.use(express.json());
    app.use(requestLog);
    app.use(cors())
    app.options("/authentication", cors())

    const port = process.env.PORT?( process.env.PORT as unknown as number) : 4000;
    app.use(express.json());
    app.use(routes);
    
    try {
      await prisma.$connect();
      console.log('😄 app conectado');
    } catch (error) {
      console.log(`😕 erro ao conectar ao banco de dados`);
    }
    app.listen(port, async () => {
      console.log(`🚀 Service started and listening at: http://127.0.0.1:${port}`);
      
    });
  }
  
  main().catch((error) => {
    console.log("Error!");
    console.log(error);
  });