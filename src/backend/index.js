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

// Database functions
// GET: Fetches things from database

// POST: Create and add them to the database
// Create a new user 
// insert into users values (email, password, current_date, graduation_date)
// something like this (not completely correct yet)
app.post('/', (req, res) => {
  const {email, password, current_date, graduation_date} = req.body;
  db('users')
    .insert({
      Email: email,
      Password: password,
      Current_Date: current_date,
      Graduation_Date: graduation_date
    })
    .then(() => {
      console.log("user added");
      return res.body({ msg: "user added"});
    })
    .catch((err) => {
      console.log(err);
    });
});

// Create a new building
// insert into building values(buildingprefix, longitude, latitude)
// not completely correct yet
app.post('/', (req, res) => {
  const {buildingprefix, longitude, latitude} = req.body;
  db('building')
    .insert({
      BuildingPrefix: buildingprefix,
      Longitude: longitude,
      Latitude: latitude
    })
    .then(() => {
      console.log("building added");
      return res.body({ msg: "building added"});
    })
    .catch((err) => {
      console.log(err);
    });
});

// DELETE: Removes them from the database

// PUT: Updates things in the database
