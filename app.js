var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/regUser',routes.regUser);
app.post('/loginStudent',routes.loginStudent);
app.post('/addQuestion',routes.addQuestion);
app.post('/getQuestion',routes.getQuestion);
app.post('/saveResult',routes.saveResult);
app.post('/getUserInfo',routes.getUserInfo);
app.post('/showResult',routes.showResult);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
