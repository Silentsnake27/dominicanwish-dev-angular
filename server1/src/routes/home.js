const express = require ('express');
const router = express.Router();
import moment from 'moment';
import Products_index from '../models/Products';
import Categories from '../models/category';

router.get("/", async (req, res) => {
  await Products_index.findAll({
    subQuery: false,
    include: [
      {
        model: Categories,
        required: true,
      }]
    
  })
    .then(async products => {
      //esta funcion con moment sera utilizada cuando se haga la interfaz,
      //de insertar productos a la db y hara que se inserte una fecha con 7 dias mas a la de la actual
      const date1 = moment()
        .add(7, "days")
        .format("YYYY/MM/DD H:mm:ss");
      // console.log(JSON.stringify(products));

      res.render("home", { products });
    })
    .catch(error => res.status(500).send(error));
  // for (var i = 0; i < product.length; i++) {
  //     var datta = product[i];
  //     console.log(datta)
  //   }
});

// router.get("/smartphones", async (req,res) => {
//    res.send('hello world') 
// });




module.exports  = router;