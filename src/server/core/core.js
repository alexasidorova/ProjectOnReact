const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const error = require('../error/error');
// const advertsRoutes = require('../adverts/adverts');
const foodsRoutes = require('../foods/foods');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

app.use('/api/v1/foods', foodsRoutes);

app.use((req, res) => {
  res.json({
    status: 'BAD_REQUEST',
    messages: [
      error({
        code: 'BAD_REQUEST'
      })
    ]
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.json({
    status: 'FAIL',
    messages: [
      error({
        code: err.message
      })
    ]
  });
});

module.exports = app;
