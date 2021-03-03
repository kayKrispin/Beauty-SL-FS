const express = require('express');
const serviceController = require('../controllers/service');

const router = express.Router();

router.get('/service/', serviceController.list);
router.post('/service/', serviceController.create);

module.exports = router;
