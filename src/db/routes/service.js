const express = require(`express`);

const serviceController = require(`../controllers/service`);
const serviceOptionsController = require(`../controllers/serviceOptions`);

const router = express.Router();

// service
router.get(`/service/`, serviceController.list);
router.post(`/service/`, serviceController.create);
router.get(`/serviceDay/`, serviceController.serviceDay);
router.get(`/servicesByUser/`, serviceController.servicesByUser);

// service options
router.get(`/serviceOptions/`, serviceOptionsController.list);

module.exports = router;
