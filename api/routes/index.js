const express = require('express');
const hotelRoutes = require('./hotel');

const router = express.Router();

router.use('/hotels', hotelRoutes);

module.exports = router;
