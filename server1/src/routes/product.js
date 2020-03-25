const express = require ('express');
const router = express.Router();
import Products_index from '../models/Products';
import Productinfo from '../models/productInfo';
import Categories from '../models/category';
router.get('/product/:id', async (req,res) => {
    var {id} = req.params;
    await Products_index.findOne({
        where: {idProducto: id},
        include: [{
            model: Productinfo,
            required: true,
        },{
            model: Categories,
            required: true
        }]
        
        
    }).then(async product => {
    const related = await Products_index.findAll({
            where: {
                idCategory: product.idCategory
            }
        })
        console.log(JSON.stringify(product))
        res.render('product', {product,related})
    }
    ).catch(error => res.status(500).send(error));
    
})

module.exports = router;