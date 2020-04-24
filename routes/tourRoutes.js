const express = require('express');
const tourController = require('../controllers/tourController');
const router = express.Router();
// router.param('id', tourController.checkID);
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopCheapTours, tourController.getAllTours);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.allowedBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.allowedBody, tourController.updateTour)
  .delete(tourController.deleteTour);
module.exports = router;
