const Tour = require('./../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures');
const AppError = require('./../utils/appError');
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );
// exports.checkID = (req, res, next, val) => {
//   console.log(val);
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).send({ status: 'fail', message: 'invalid id' });
//   }
//   next();
// };
exports.allowedBody = (req, res, next) => {
  const allowedParams = [
    'name',
    'duration',
    'maxGroupSize',
    'difficulty',
    'ratingsAverage',
    'ratingsQuantity',
    'price',
    'priceDiscount',
    'summary',
    'description',
    'imageCover',
    'images',
    'createdAt',
    'startDates',
    'secretTour',
    'startLocation',
    'locations',
    'guides',
  ];
  const reqBody = Object.keys(req.body);
  const isValidRequest = reqBody.every((field) => {
    if (
      !allowedParams.includes(field) &&
      process.env.NODE_ENV === 'development'
    )
      console.log(field);
    return allowedParams.includes(field);
  });
  if (!isValidRequest) {
    return res
      .status(400)
      .send({ status: 'fail', message: 'invalid request body' });
  }
  next();
};
exports.aliasTopCheapTours = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = 'price';
  next();
};
exports.getAllTours = async (req, res) => {
  try {
    const features = new APIFeatures(Tour, req.query);
    features
      .filter((queryObj) => {
        if (queryObj['search']) {
          let regex = new RegExp(`${queryObj['search']}`, 'i');
          // { $or:[ {'startLocation.description': /Miami, USA/ },{'name':/The Snow Adventurer/}]}
          queryObj['$or'] = [
            { 'startLocation.description': regex },
            { name: regex },
          ];
          delete queryObj.search;
        }
      })
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query; //.explain();
    const response = {
      status: 'success',
      results: tours.length,
      data: { tours },
    };
    if (req.query.search) {
      let regex = new RegExp(`${req.query.search}`, 'i');
      const count = await Tour.count({
        $or: [{ 'startLocation.description': regex }, { name: regex }],
      });
      response.count = count;
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

exports.getTour = async (req, res, next) => {
  try {
    // const foundTour = await Tour.find({ _id: req.params.id });
    const foundTour = await Tour.findById(req.params.id).populate('guides');
    //.populate('reviews'); //{path:'guides',select:'-_v,-passwordChangedAt'}
    if (!foundTour) {
      return next(new AppError('No such id exists', 404));
    }
    res.status(200).json({ status: 'success', data: { tour: foundTour } });
  } catch (err) {
    return res.status(404).send({ status: 'fail', message: err });
  }
};
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
exports.createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({ status: 'success', data: { tour: newTour } });
});

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ status: 'success', data: { tour: tour } });
  } catch (err) {
    return res.status(404).send({ status: 'fail', message: err });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    return res.status(404).send({ status: 'fail', message: err });
  }
};
exports.getTourStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: { $toUpper: '$difficulty' },
          numTours: { $sum: 1 },
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: { avgPrice: 1 },
      },
    ]);
    res.status(200).json({ status: 'success', data: stats });
  } catch (err) {
    res.status(404).json({
      stats: 'fail',
      message: err,
    });
  }
};
exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1;
    const plan = await Tour.aggregate([
      { $unwind: '$startDates' },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numTourStarts: { $sum: 1 },
          tours: { $push: '$name' },
        },
      },
      {
        $addFields: {
          month: '$_id',
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: {
          numTourStarts: -1,
        },
      },
    ]);
    res
      .status(200)
      .json({ status: 'success', results: plan.length, data: { plan } });
  } catch (err) {
    res.status(404).json({
      stats: 'fail',
      message: err,
    });
  }
};

exports.getTourWithin = async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6378.1; //second else part is kilo meter
  if (!lat || !lng) {
    return next(
      new AppError('Please provide Lat and Lang in the format lat,lng', 400)
    );
  }
  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tour: tours,
    },
  });
};

exports.getDistances = async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  if (!lat || !lng) {
    return next(
      new AppError('Please provide Lat and Lang in the format lat,lng', 400)
    );
  }
  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;
  const distances = await Tour.aggregate([
    {
      $geoNear: {
        //should be first in tunnel. tunnel could be already filled if any aggregation middleware is in place
        near: { type: 'point', coordinates: [lng * 1, lat * 1] },
        key: 'startLocation',
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      tour: distances,
    },
  });
};
