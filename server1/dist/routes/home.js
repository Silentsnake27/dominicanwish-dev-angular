"use strict";

var _moment = _interopRequireDefault(require("moment"));

var _Products = _interopRequireDefault(require("../models/Products"));

var _category = _interopRequireDefault(require("../models/category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();
router.get("/", async (req, res) => {
  await _Products.default.findAll({
    subQuery: false,
    include: [{
      model: _category.default,
      required: true
    }]
  }).then(async products => {
    //esta funcion con moment sera utilizada cuando se haga la interfaz,
    //de insertar productos a la db y hara que se inserte una fecha con 7 dias mas a la de la actual
    const date1 = (0, _moment.default)().add(7, "days").format("YYYY/MM/DD H:mm:ss"); // console.log(JSON.stringify(products));

    res.render("home", {
      products
    });
  }).catch(error => res.status(500).send(error)); // for (var i = 0; i < product.length; i++) {
  //     var datta = product[i];
  //     console.log(datta)
  //   }
}); // router.get("/smartphones", async (req,res) => {
//    res.send('hello world') 
// });

module.exports = router;