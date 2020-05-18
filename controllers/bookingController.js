const Tour = require('../models/tourModel');
const stripe = require('stripe')('sk_test_vVnvR0IuUzCgifrC8eew8HIo008Etq1Mkz');
const catchAsync = require('../utils/catchAsync');

exports.getStripeSession = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.tourID);
  const tourSession = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${
      req.params.tourID
    }`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourID,
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
