var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var morgan = require("morgan");
var app = express();
var session = require("express-session");
var passport = require("passport");


//view engine setup
app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "pug");

//
app.use(morgan('dev')); // send messages to cli
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({secret: "something there"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

//catch 404 and forward to error handler
app.use(function(req, res, next){
   var err = new Error("Not Found");
   err.status = 404;
   next(err);
})

//Error handler
app.use(function(err, req, res){
  //Set locals, only provide error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//render error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app

app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});
