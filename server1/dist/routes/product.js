"use strict";

var _Products = _interopRequireDefault(require("../models/Products"));

var _productInfo = _interopRequireDefault(require("../models/productInfo"));

var _category = _interopRequireDefault(require("../models/category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const router = express.Router();
router.get('/product/:id', async (req, res) => {
  var {
    id
  } = req.params;
  await _Products.default.findOne({
    where: {
      idProducto: id
    },
    include: [{
      model: _productInfo.default,
      required: true
    }, {
      model: _category.default,
      required: true
    }]
  }).then(async product => {
    const related = await _Products.default.findAll({
      where: {
        idCategory: product.idCategory
      }
    });
    console.log(JSON.stringify(product));
    res.render('product', {
      product,
      related
    });
  }).catch(error => res.status(500).send(error));
});
module.exports = router;