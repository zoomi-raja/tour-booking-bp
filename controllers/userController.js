const multer = require('multer');
const sharp = require('sharp');
const AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const factory = require('./handlerFactory');
// multer settings
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   },
// });
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image..!', 400), false);
  }
};
const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
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
exports.getUser = factory.getOne(User);
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
exports.uploadPhoto = upload.single('photo');
exports.resizePhoto = (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  sharp(req.file.buffer)
    .resize(500, 500, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
};
exports.updatePhoto = async (req, res) => {
  let updatedUser = req.user;
  if (req.file) {
    const filteredBody = { photo: req.file.filename };
    updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
      new: true,
      runValidators: true,
    });
  }
  res.status(200).json({ status: 'success', data: { user: updatedUser } });
};
