var Response = require('../helpers/response');
var {GetMovieDao} =  require('../daos/moviesDao');

//Get Movies request to Dao
var GetMovies = (request,response) => {
  var title = request.query.title;
  if (!title) {
    title = 'a';
  }
  GetMovieDao(title)
  .then(data => response.send(data))
  .catch(error => response.send(Response(false)))
};

module.exports = {GetMovies};
