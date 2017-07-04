var request = require('request-promise');

//Get Movie Dao form URL
var GetMovieDao = function(title) {
  var url = 'https://omdbclone.herokuapp.com/db/movie/search/' + title;

  return new Promise(function(resolve, reject) {
    request({url: url, json: true})
    .then(data => resolve(data))
    .catch(err => reject(err))
  });
};

module.exports = {GetMovieDao};
