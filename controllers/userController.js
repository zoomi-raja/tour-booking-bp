const AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};
exports.updateMe = async (req, res, next) => {
  if (req.body.password || req.body.passwordConfrim) {
    return next(new AppError('This route is not to update password', 401));
  }
  const filteredBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: 'success', data: { user: updatedUser } });
};
exports.getAllUsers = (req, res) => {
  res
    .status(500)
    .json({ status: 'err', message: 'this route not yet defined' });
};
exports.getUser = (req, res) => {
  res
    .status(500)
    .json({ status: 'err', message: 'this route not yet defined' });
};
exports.createUser = (req, res) => {
  res
    .status(500)
    .json({ status: 'err', message: 'this route not yet defined' });
};
exports.updateUser = (req, res) => {
  res
    .status(500)
    .json({ status: 'err', message: 'this route not yet defined' });
};
exports.deleteUser = (req, res) => {
  res
    .status(500)
    .json({ status: 'err', message: 'this route not yet defined' });
};
