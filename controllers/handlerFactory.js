const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures = require('./../utils/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({ status: 'success', data: null });
  });

exports.updateOne = (model) => {
  return catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    const modelName = model.modelName.toLowerCase();
    res.status(200).json({
      status: 'success',
      data: { [modelName]: doc },
    });
  });
};

exports.createOne = (model, func) =>
  catchAsync(async (req, res, next) => {
    if (func instanceof Function) {
      func(req, res);
    }
    const doc = await model.create(req.body);
    const modelName = model.modelName.toLowerCase();
    res.status(201).json({ status: 'success', data: { [modelName]: doc } });
  });

exports.getOne = (model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }
    const modelName = model.modelName.toLowerCase();
    res.status(200).json({
      status: 'success',
      data: { [modelName]: doc },
    });
  });

exports.getAll = (model, func) =>
  catchAsync(async (req, res, next) => {
    if (func instanceof Function) {
      func(req, res);
    }
    const features = new APIFeatures(model, req.query);
    features.filter().sort().limitFields().paginate();

    const docs = await features.query;
    const modelName = model.modelName.toLowerCase();
    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: { [modelName]: docs },
    });
  });
