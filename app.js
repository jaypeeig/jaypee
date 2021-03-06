var express 	= require('express');
var path 		= require('path');
var bodyParser	= require('body-parser');

var app = express();
var port = 80;

//route vars
var index = require('./routes/index');

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static folder
app.use(express.static(path.join(__dirname, 'client')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(port, function(){
	console.log('server started at port ' + port);
});