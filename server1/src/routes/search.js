import {Router} from 'express';
const router = Router();
import Products_index from '../models/Products';
import Categories from '../models/category';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.post("/search", async (req, res) => {
  var { data_search } = req.body;
  await Products_index.findAll({
    where: {
      name: {
        [Op.like]: `%${data_search}%`
      }
    },
    include: [{
      model: Categories,
      required: true,
    }]
  })
    .then(products => res.render("store", { products }))
    .catch(err => console.log(err));
  // res.render('store')
});


module.exports = router;