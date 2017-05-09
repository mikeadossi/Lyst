var express = require("express");
var router = express.Router();
var Queries = require("../database/queries.js");

router.get('/', function(req, res, next) {
  Queries.getAll().then(function(projects) {
    res.render("index", {
      title: 'To Drop',
      projects: projects
    })
  })
})

//Other routes will go here


module.exports = router
