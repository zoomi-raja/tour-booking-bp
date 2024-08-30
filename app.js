const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
// routes
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const hpp = require('hpp');

const app = express();
// security http headers
app.use(helmet());
// body parser
app.use(express.json({ limit: '10kb' }));
// data sanitize to remove query from posted params
app.use(mongoSanitize());
// data sanitize against xss(malicious html code)
app.use(xss());
// clean http params polution by removing same name parms
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'difficulty',
      'maxGroupSize',
      'price',
    ],
  })
);

// allow cros
app.use(cors());
// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// limit incoming requests per ip
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'too many requests from this ip',
});
app.use('/api', limiter);
const path = express.static(`${__dirname}/public`);
app.use(path);

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);
// handle 404
app.all('/api/*', (req, res, next) => {
  // res
  //   .status(404)
  //   .json({ status: 'fail', message: `Can't find ${req.originalUrl}` });

  // const error = new Error(`Can't find ${req.originalUrl}`);
  // error.statusCode = 400;
  // error.status = 'fail';
  next(new AppError(`Can't find ${req.originalUrl}`, 400));
});
app.use('*', path);
app.use(globalErrorHandler);

module.exports = app;
