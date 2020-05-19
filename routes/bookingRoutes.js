const express = require('express');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/checkout-session/:tourID',
  authController.protect,
  bookingController.getStripeSession
);
router.post(
  '/success/:sessionID',
  authController.protect,
  bookingController.createOrder
);
module.exports = router;
