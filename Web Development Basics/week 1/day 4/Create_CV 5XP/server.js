const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('CV_F'));

app.post('/', (req, res) => {

  const CV_F = req.body;
  console.log(CV_F);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
