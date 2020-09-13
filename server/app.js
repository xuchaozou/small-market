var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let expressArtTemplate = require('express-art-template')

var homeRouter = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //set views path
app.engine('.html', expressArtTemplate) 
app.set('view engine', '.html');

//设置跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin' , req.headers.origin || '*')
  res.header('Access-Control-Allow-Headers' , 'Content-Type, Authorization, X-Requested-With')
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next()
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/',express.static(path.join(__dirname, 'public')));

app.use('/home', homeRouter);


//error
// app.use(function(req,res){
//   res.status(500).render('error.html')
// })

module.exports = app;
