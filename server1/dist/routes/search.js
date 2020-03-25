"use strict";

var _express = require("express");

var _Products = _interopRequireDefault(require("../models/Products"));

var _category = _interopRequireDefault(require("../models/category"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();

const Sequelize = require('sequelize');

const Op = Sequelize.Op;
router.post("/search", async (req, res) => {
  var {
    data_search
  } = req.body;
  await _Products.default.findAll({
    where: {
      name: {
        [Op.like]: `%${data_search}%`
      }
    },
    include: [{
      model: _category.default,
      required: true
    }]
  }).then(products => res.render("store", {
    products
  })).catch(err => console.log(err)); // res.render('store')
});
module.exports = router;