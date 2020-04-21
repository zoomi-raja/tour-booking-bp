const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
exports.checkID = (req, res, next, val) => {
  console.log(val);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).send({ status: 'fail', message: 'invalid id' });
  }
  next();
};
exports.getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: 'success', results: tours.length, data: { tours } });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const foundTour = tours.find((el) => {
    if (el.id === id) return el;
  });
  if (!foundTour) {
    return res.status(404).send({ status: 'fail', message: 'invalid id' });
  }
  res.status(200).json({ status: 'success', data: { tour: foundTour } });
};
exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
  res.status(200).json({ status: 'success' });
};
exports.deleteTour = (req, res) => {
  res.status(204).json({ status: 'success' });
};
