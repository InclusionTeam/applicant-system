const express = require('express');
const router = express.Router();
const { Form } = require('../../models');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
  res.json(await Form.all());
});

router.post('/', cors(), async (req, res) => {
  res.json(await Form.new(req));
});

module.exports = router;
