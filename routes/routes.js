var express = require("express");
var router = express.Router();
var Queries = require("../database/queries.js");


router.get('/', function(req, res, next) {
  Queries.getAll().then(function(projects) {
    res.render("index", {
      projects: projects
    })
  })
})

router.post('/insert-task', function(req, res, next) {

    Queries.addTask(req.body.user_entry).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/')
      })
    })

})

router.post('/checked', function(req, res, next) {
    let id = req.body.id
    Queries.toggleTrue(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/')
      })
    })

})

router.post('/unchecked', function(req, res, next) {
    let id = req.body.id;
    Queries.toggleFalse(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.redirect('/')
      })
    })

})

router.post('/delete-task', function(req, res, next) {
  Queries.deleteTask().then(function(projects) {

    Queries.getAll().then(function(projects) {
      res.redirect('/')
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
      res.redirect('/')
    })
  })

})

router.get('/login', function(req, res, next) {
      res.render('login.pug')
})

router.get('/signup', function(req, res, next) {
      res.render('signup.pug')
})

// router.get('/', function(req, res, next) {
//       res.render('index.pug')
// })

module.exports = router
