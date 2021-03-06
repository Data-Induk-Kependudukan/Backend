require('dotenv').config();
const db = require('./api/database/dbconfig');
const routes = require('./api/routes');
const express = require('express');
const cors = require('cors');

db.run();

const app = express();
const corsOptions = {
  // origin: process.env.ORIGIN,
  exposedHeaders: ['auth-token']
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).send('Connect zhar aman');
});

routes(app);

app.listen(port, () => {
  console.log(`Established on port ${port}`);
});