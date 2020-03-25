import 'reflect-metadata';

import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/indexRoutes";
import productRoutes from "./routes/productRoutes";
import {createConnection} from 'typeorm';


class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    createConnection().then( success =>  console.log('Conection to database sucesfully'))
    .catch(err => console.log('database conection error')
    );
  }

  routes(): void {
    this.app.use("/", indexRoutes);
    this.app.use("/api/product", productRoutes);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
