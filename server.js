require('dotenv').config(); // this always comes first
require('./lib/utils/connect')();

const app = require('./lib/app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`LISTENING on ${PORT}`);
});
