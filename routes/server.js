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

  if(req.body.delete_item){
    Queries.addTask(req.body.user_entry).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.render("index", {
          projects: projects
        })
      })
    })} else {
      Queries.addTask(req.body.user_entry).then(function(projects) {
        Queries.getAll().then(function(projects) {
          res.render("index", {
            projects: projects
          })
        })
      })
    }

})

// router.post('/delete-task', function(req, res, next) {
// })

//Other routes will go here


module.exports = router
