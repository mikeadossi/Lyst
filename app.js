var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var index = require("./routes/server");

//POSSIBLY RUNNING A COMMAND IN THE COMMANDLINE TO CREATE TABLE WHEN FIRST START APP?
// var exec = require("child-process").exec;
//
// exec("psql < /Users/kmwarter/Desktop/learnersguild/3projects/wk10/sql-exercises/data/students.csv", function(err, stdout) {
//
//   if (err) {
//      Throw err;
//   }


var app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index);

//catch 404 and forward to error handler
app.use(function(req, res, next){
   var err = new Error("Not Found");
   err.status = 404;
   next(err);
})

//Error handler
app.use(function(err, req, res, next){
  //Set locals, only provide error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//render error page
  res.status(err.status || 500);
  res.render("error");
});


//If needed
// module.exports = app
