const express = require('express');
const router = express.Router();
const itemsService = require('../services/items.service');

/* GET query items */
router.get('/items', async (req, res) => {
  const response = await itemsService.getItemsByQuery(req.query.q);
  res.send(response);
});

/* GET item detail */
router.get('/items/:id', async (req, res) => {
  const response = await itemsService.getProductDetail(req.params.id);
  res.send(response);
});

module.exports = router;
