import {Request, Response} from "express";
import {getRepository} from 'typeorm';
import { Categories } from "../entities/Category";
class IndexController {
 public async index(req: Request, res: Response) {
    const products = await getRepository(Categories).find();
    return res.json(products);
  }
}

export const indexController = new IndexController();