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
      res.render("index", {
        projects: projects
      }) 
    })
  })
})

//Other routes will go here


module.exports = router
