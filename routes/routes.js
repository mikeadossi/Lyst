var express = require("express");
var router = express.Router();
var Queries = require("../database/queries.js");

var passport = require("passport");
var passport_local = require("passport-local");
//passport setup
passport.use(new passport_local.Strategy({
  usernameField : "username",
  passwordField : "password",
  session : true
}, function(username, password, callback){
  Queries.getUser(username).then(function(result){
    console.log('result: ',result) // if result is empty the profile doesn't exist, return an error.
    if(result.length === 0){
      return callback(null,false,{message:'no such user'})
    }
    var user = result[0];
    if(user.password !== password){
      return callback(null, false, {message:'wrong password'})
    }
    return callback(null, user, {message:'success'})
  })
}));

passport.serializeUser(function(user, callback){
  callback(null, user.username)
})

passport.deserializeUser(function(name, callback){
  Queries.getUser(name).then(function(result){
    callback(null, result[0])
  })
})

router.get('/lyst', function(req, res, next) {
  Promise.all([Queries.getAll(), Queries.getCount()]).then(function([projects,tasks]) {
    res.render("lyst", {
      projects: projects,
      tasks: tasks,
      isAuthenticated: req.isAuthenticated()
    })
  })
})

router.post('/insert-task', function(req, res, next) {

    Queries.addTask(req.body.user_entry).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/lyst')
      })
    })

})

router.post('/checked', function(req, res, next) {
    let id = req.body.id
    Queries.toggleTrue(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/lyst')
      })
    })

})

router.post('/unchecked', function(req, res, next) {
    let id = req.body.id;
    Queries.toggleFalse(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/lyst')
      })
    })

})

router.post('/delete-task', function(req, res, next) {
  Queries.deleteTask().then(function(projects) {

    Queries.getAll().then(function(projects) {
      res.redirect('/lyst')
    })
  })

})

router.post('/update-input', function(req, res, next) {
  let id = req.body.id;
  let value = req.body.value;
  console.log('id ###> ',id);
  console.log('value ###> ',value);
  Queries.updateInput(id,value).then(function(projects) {

    Queries.getAll().then(function(projects) {
      res.send( '/home' )
      res.redirect('/lyst')
    })
  })

})

router.get('/login', function(req, res, next) {
      res.render('login.pug')
})

router.post('/login', passport.authenticate('local'), function(req, res, next) {
  var user = req.user;
  console.log('user: ',user)
      res.redirect('/lyst')
})

router.get('/signup', function(req, res, next) {
      res.render('signup.pug')
})

router.get('/', function(req, res, next) {
      res.render('home.pug')
})

// router.get('/lyst', function(req, res, next) {
//       res.render('index.pug')
// })

module.exports = router
