const express = require('express');

const app = express();
const rateLimit = require('express-rate-limit');
const cors = require('cors');

require('dotenv/config');
require('./models/dbInit');


app.use(cors())

app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// const authMiddleware = require('./middleware/authorize')

const testRoute = require('./routes/test');

// const apiLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100,
// });

app.use('/test', testRoute);


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
    console.log('server started');
});