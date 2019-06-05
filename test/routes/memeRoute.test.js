require('dotenv').config();
const mongoose = require('mongoose');
const request = require('supertest');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');
const Meme = require('../../lib/models/Meme');

describe('meme routes', () => {
  beforeAll(() => {
    return connect();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a new meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        image: 'image.png.url'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          image: 'image.png.url',
          __v: 0
          
        });
      });
  });
    
    
});


