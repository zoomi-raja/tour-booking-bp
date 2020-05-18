const express = require('express');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/checkout-session/:tourID',
  authController.protect,
  bookingController.getStripeSession
);
module.exports = router;
