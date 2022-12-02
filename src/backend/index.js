const express = require('express')
const app = express()
const port = 3001

const queries = require('./queries')

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/test', (req, res) => {
    queries.getUsers()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.get('/getroutes', (req, res) => {
    queries.getUserRoutes()
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.post('/user', (req, res) => {
    queries.insertUser(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.post('/classes', (req, res) => {
    queries.insertClasses(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.post('/building', (req, res) => {
    console.log(req.body.building, req.body.latitude, req.body.longitude)
    queries.insertBuilding(req.body.building, req.body.latitude, req.body.longitude)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.post('/feedback', (req, res) => {
    console.log(req.body)
    queries.insertFeedback(req.body)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.delete('/classes/:email', (req, res) => {
    queries.deleteClasses(req.params.email)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.delete('/building/:prefix', (req, res) => {
    queries.deleteBuildings(req.params.prefix)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})