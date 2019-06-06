const express = require('express');
const app = express();
const mongoConnection = require('./middleware/mongo-connection');
const cors = require('cors');

app.use(cors());

app.use(require('morgan')('tiny', {
  ///what does this do lol
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json({ limit: '1mb' }));

app.use('/api/v1/memes', mongoConnection, require('./routes/memes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


app.get('/', (req, res) => {
  res.end('hey');
});


module.exports = app;
