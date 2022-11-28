const express = require('express');
const cors = require('cors');
const knex = require('knex');
const app = express();
app.use(cors());
require('dotenv').config();
const port = 3001;

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
})

// Database functions
// GET: Fetches things from database
// POST: Create and add them to the database
// DELETE: Removes them from the database
// PUT: Updates things in the database