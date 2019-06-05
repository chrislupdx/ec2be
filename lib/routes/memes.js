const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    const {
      header1,
      image,
      header2
    } = req.body;

    Meme
      .create({ header1, image, header2 })
      .then(meme => res.send(meme))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Meme
      .find()
      .select({
        __v: false
      })
      .lean()
      .then(meme => res.send(meme))
      .catch(next);
  })
;
