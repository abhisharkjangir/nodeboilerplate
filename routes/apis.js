var express = require('express');
var router = express.Router();
var {GetMovies} = require('../api/handlers/movieHandlers');

// GET Movies List
router.get('/movies',GetMovies);

module.exports = router;
