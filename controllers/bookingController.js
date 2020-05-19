const Tour = require('../models/tourModel');
const Booking = require('../models/bookingModel');
const token = 'sk_test_vVnvR0IuUzCgifrC8eew8HIo008Etq1Mkz';
const stripe = require('stripe')(token);
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');

exports.getStripeSession = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourID);
  const tourSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `http://localhost:3000/payment/{CHECKOUT_SESSION_ID}`, // for same url dynamic ${req.protocol}://${req.get('host')}
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${
      req.params.tourID
    }`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourID,
    metadata: {
      userID: req.user.id,
    },
    line_items: [
      {
        name: tour.name,
        description: tour.summary,
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1,
      },
    ],
  });
  res.status(200).json({ status: 'success', session: tourSession });
});

exports.createOrder = catchAsync(async (req, res, next) => {
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  const stripeSession = await axios.get(
    `https://api.stripe.com/v1/checkout/sessions/${req.params.sessionID}`
  );
  const serverRsp = stripeSession.data;
  const booking = await Booking.create({
    tour: serverRsp.client_reference_id,
    user: serverRsp.metadata.userID,
    price: serverRsp.display_items[0].amount / 100,
    paid: true,
    paidDate: Date.now(),
  });
  res.status(200).json({ status: 'success', data: booking });
});
