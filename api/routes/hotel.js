const express = require('express');
const hotelController = require('../controllers/hotel');

const router = express.Router();

router.route('/').get(hotelController.getAll);

module.exports = router;
