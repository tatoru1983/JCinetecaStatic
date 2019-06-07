var express = require('express'),
    path = require('path'),
    http = require('http');
    /*users = require('./routes/users');
	movies = require('./routes/movies');
	ratings = require('./routes/ratings');*/

var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); 

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public/app')));

app.use(bodyParser.json());  // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
/*app.post('/users', users.getUser);
app.post('/movies', movies.getMovies);
app.post('/movies/:imdbid', movies.getMovieByID);
app.post('/ratings/:imdbid', ratings.getRatingsByID);

app.put('/movies/:imdbid', movies.updateSeenMovie);
app.put('/movies/:imdbid', movies.updateNotSeenMovie);*/
// Http Methods

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
