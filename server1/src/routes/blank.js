const express = require ('express');
const router = express.Router();

router.get('/blank', async (req,res) => {
    res.render('blank');
})

module.exports  = router;