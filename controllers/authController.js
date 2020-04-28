const User = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const { promisify } = require('util');
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
const signToken = (obj) => {
  return jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
exports.signup = catchAsync(async (req, res, next) => {
  const newUseer = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  const token = signToken({ id: newUseer._id });
  res.status(201).json({ status: 'success', token, data: { user: newUseer } });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.decodePassword(password, user.password))) {
    return next(new AppError('Incorrect email or password'), 401);
  }
  const token = signToken({ id: user._id });
  res.status(201).json({ status: 'success', token, data: { user: user } });
});
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('You are not logged in', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    return next(
      new AppError('The owner of this tokkeb dont exist anymore', 401)
    );
  }
  if (user.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('Recently changed password', 401));
  }
  req.user = user;
  next();
});
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('Youy dont have access to perfrom this action', 403)
      );
    }
    next();
  };
};
