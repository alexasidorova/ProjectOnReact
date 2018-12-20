const router = require('express').Router();
const db = require('../db/db');

// GET /adverts
router.get('/', (req, res) => {
  const foods = db.get('foods').value();
  res.json({
    status: 'OK',
    data: foods
  });
});


// POST /adverts/new
// router.post('./', (req, res, next) => {
//   const advert = newAdvert(req.body.text);

//   console.log(advert);

//   db
//     .get('adverts')
//     .push(advert)
//     .write();

//   res.json({
//     status: 'OK',
//     data: advert
//   });
//   next();
// });

// PATCH /tasks/:id
// router.patch('/:id', (req, res, next) => {
//   const advert = db
//     .get('adverts')
//     .find({
//       id: req.params.id
//     })
//     .assign(req.body)
//     .value();

//   db.write();

//   res.json({
//     status: 'OK',
//     data: advert
//   });
//   next();
// });

// DELETE /adverts/:id
router.delete('/:id', (req, res) => {
  db
    .get('foods')
    .remove({
      id: req.params.id
    })
    .write();

  res.json({
    status: 'OK'
  });
});

module.exports = router;
