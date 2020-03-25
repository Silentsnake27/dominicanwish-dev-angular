"use strict";

const express = require('express');

const router = express.Router();
router.get('/store', async (req, res) => {
  res.render('store');
});
module.exports = router;