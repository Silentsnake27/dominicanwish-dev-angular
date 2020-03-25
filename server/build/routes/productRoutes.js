"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => res.send("Product"));
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
