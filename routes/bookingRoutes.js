const express = require('express');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();
router.use(authController.protect);
router.get('/checkout-session/:tourID', bookingController.getStripeSession);
router.post('/success/:sessionID', bookingController.createOrder);
router.get('/', bookingController.getAll);
module.exports = router;
