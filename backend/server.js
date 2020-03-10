const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const formsRouter = require('./routes/forms');

// serve the homepage from here
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle api calls from here
app.use('/forms', formsRouter);

app.listen(port, () => {
  console.clear();
  console.log(`Server app listening on port ${port}!`);
});
