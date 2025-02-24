//to run this script ---> node import-dev-data.js --import
const fs = require("fs");
const mongoose = require("mongoose");
const env = require("dotenv");
env.config({ path: "../../.env" });
const Tour = require("./../../models/tourModel");
const Review = require("./../../models/reviewModel");
const User = require("./../../models/userModel");
console.log(process.env.DATABASE);
mongoose
  .connect(process.env.DATABASE)
  .then((con) => {
    console.log("db connection successful");
  })
  .catch((err) => console.log(err));
// read tours from file

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`));
const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log("data successfully loaded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await Review.deleteMany();
    await User.deleteMany();
    console.log("data has been successfully deleted");

    process.exit();
  } catch (err) {
    console.log(err);
  }
};
console.log(process.argv);
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
} else {
  console.log("wrong argument posibble arguments are --import and --delete");
  process.exit();
}
