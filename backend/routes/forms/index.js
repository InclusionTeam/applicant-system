const express = require('express');
const router = express.Router();
const { Forms } = require('../../models');

router.get('/forms', async (req, res) => {
  res.json(await Form.all());
});

router.post('/new', cors(), async (req, res) => {
  res.json(await Form.new(req));
});

module.exports = router;