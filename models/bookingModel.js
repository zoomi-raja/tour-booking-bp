const mongoose = require('mongoose');
const bookingSchema = mongoose.Schema({
  tour: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour',
    require: [true, 'booking must belong to a tour'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: [true, 'booking must belongs to a user'],
  },
  price: {
    type: Number,
    require: [true, 'booking must have a price'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: false,
  },
  paidDate: Date,
});
bookingSchema.pre(/^find/, function (next) {
  this.populate({ path: 'tour', select: '-name' }); //.populate('user')
  next();
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
