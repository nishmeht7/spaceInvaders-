const express = require('express'); 
const bodyParser = require('body-parser'); 
const nunjucks = require('nunjucks'); 
const morgan = require('morgan');
const app = express(); 


//using morgan 
app.use(morgan('dev')); 
//serving static files in public 
app.use(express.static('public')); 
//setting up body-parser
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

var env = nunjucks.configure('views', {noCache:true});
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.get('/', function(req, res){
	res.render('index');
})


app.listen(3000, function(){
	console.log("listening on 3000"); 
})