const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
// exports.getAllReviews = catchAsync(async (req, res, next) => {
//   let filter = {};
//   if (req.params.tourId) filter = { tour: req.params.tourId };
//   const reviews = await Review.find(filter).populate({
//     path: 'tour',
//     select: 'name',
//   });
//   res
//     .status(200)
//     .json({ status: 'success', results: reviews.length, data: { reviews } });
// });
exports.getAllReviews = factory.getAll(Review, (req, res) => {
  if (req.params.tourId) req.query._id = req.params.tourId;
});
// exports.createReview = catchAsync(async (req, res, next) => {
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   const newReview = await Review.create(req.body);
//   res.status(201).json({ status: 'success', data: { newReview } });
// });
exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.createReview = factory.createOne(Review, (req, res) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  //   instead of passing this as function can also be seprated as middle ware and include it in route setTourUserIds
});
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.getReview = factory.getOne(Review, {
  path: 'tour',
  select: 'name',
});
