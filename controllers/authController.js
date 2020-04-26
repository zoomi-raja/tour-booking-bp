const User = require('./../models/userModel');
const AppError = require('./../utils/appError');

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUseer = await User.create(req.body);
  res.status(201).json({ status: 'success', data: { user: newUseer } });
});
