"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Category_1 = require("../entities/Category");
class IndexController {
    async index(req, res) {
        const products = await typeorm_1.getRepository(Category_1.Categories).find();
        return res.json(products);
    }
}
exports.indexController = new IndexController();
