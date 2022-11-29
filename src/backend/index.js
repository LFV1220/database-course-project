const express = require('express');
const app = express();
const { Pool } = require("pg");
const port = 3001;

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db-app',
  password: 'root',
  port: 5432
});

pool.connect();

// query example
pool.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  pool.end;
});

// Database functions
// GET: Fetches things from database

// POST: Create and add them to the database

// Create a new user
// insert into users values (email, password, current_date, graduation_date)


// Create a new building
// insert into building values(buildingprefix, longitude, latitude)


// DELETE: Removes them from the database

// PUT: Updates things in the database
