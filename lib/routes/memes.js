const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    console.log('errr');
    const {
      image,
    } = req.body;

    Meme
      .create({ image })
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
