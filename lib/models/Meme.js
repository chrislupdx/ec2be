const mongoose = require('mongoose');

const memeModel = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Meme', memeModel);

