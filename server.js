const mongoose = require('mongoose');
const env = require('dotenv');
env.config({ path: './config.env' });
const app = require('./app');
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

// console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port num ${port} ....`);
});
