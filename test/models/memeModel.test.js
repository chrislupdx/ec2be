const mongoose = require('mongoose');
const Meme = require('../../lib/models/Meme');


describe('Meme model', () => {
  it('has a user and a body field', () => {
    const meme = new Meme({
      image: 'unsettling.png'
    });

    expect(meme.toJSON()).toEqual({
      image: 'unsettling.png',
      _id: expect.any(mongoose.Types.ObjectId)
    });

  });
})
;
