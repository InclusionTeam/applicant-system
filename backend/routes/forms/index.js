const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Form } = require('../../models');

router.get('/forms', async (req, res) => {
  res.json(await Form.all());
});

router.post('/new', cors(), async (req, res) => {
  res.json(await Form.new(req));
});

module.exports = router;