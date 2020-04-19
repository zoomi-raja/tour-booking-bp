const express = require('express');
const router = express.Router();
const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours } });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const foundTour = tours.find((el) => {
    if (el.id === id) return el;
  });
  if (!foundTour) {
    return res.status(404).send({ status: 'fail', message: 'invalid id' });
  }
  res.status(200).json({ status: 'success', data: { tour: foundTour } });
};
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).send({ status: 'success', data: { tour: newTour } });
    }
  );
};

const updateTour = (req, res) => {
  res.status(200).json({ status: 'success' });
};
const deleteTour = (req, res) => {
  res.status(204).json({ status: 'success' });
};
router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);
module.exports = router;
