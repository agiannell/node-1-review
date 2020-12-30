const express = require('express');
const data = require('../data.json');
const ctrl = require('./controller');
const app = express();
const port = 4321;

// endpoints
app.get('/api/movies', ctrl.getMovies)
app.get('/api/movie/:id', ctrl.getSingleMovie)

//// 

app.listen(port, () => console.log(`Listening on port ${port}`))