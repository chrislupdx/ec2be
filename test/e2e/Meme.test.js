const request = require('supertest');
const app = require('../../lib/app');
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
require('dotenv').config();


describe('e2e meme routes', () => {
  beforeAll(() => {
    return connect();
  });
    
  afterAll(() => {
    return mongoose.connection.close();
  });
    
  it('can post a meme', () => {
    return request(app)
      .post('/api/v1/memes')
      .send({
        image: 'skethcy'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          image: 'skethcy',
          __v: 0
        
        });
      });
  });
})
;
