/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')

var app = express();

// app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'static')));
// });

function init() {
//   app.get('/', routes.index);
//   app.get('/users', user.list);
//   app.get('/hikes', hike.index);
//   app.post('/add_hike', hike.add_hike);

  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
}
init();