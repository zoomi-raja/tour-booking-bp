const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'hello from server side' });
});
app.post('/', (req, res) => {
  res.status(200).json({ msg: 'post call received' });
});
const port = 3000;
app.listen(port, () => {
  console.log(`app running on port num ${port} ....`);
});
