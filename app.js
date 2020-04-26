const express = require('express');
const morgan = require('morgan');
// routes
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static(`${__dirname}/public`));

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// handle 404
app.all('*', (req, res, next) => {
  // res
  //   .status(404)
  //   .json({ status: 'fail', message: `Can't find ${req.originalUrl}` });

  // const error = new Error(`Can't find ${req.originalUrl}`);
  // error.statusCode = 400;
  // error.status = 'fail';
  next(new AppError(`Can't find ${req.originalUrl}`, 400));
});

app.use(globalErrorHandler);

module.exports = app;
