const fs = require('fs');
const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: './config.env' });
const Tour = require('./../../models/tourModel');
mongoose
  .connect(
    process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD),
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then((con) => {
    console.log('db connection successful');
  });
// read tours from file

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data successfully loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data has been successfully deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};
console.log(process.argv);
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
