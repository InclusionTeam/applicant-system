const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Form.all());
});

router.post('/', cors(), async (req, res) => {
  res.json(await Form.new(req));
});

module.exports = router;