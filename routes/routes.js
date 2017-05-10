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

router.post('/checked', function(req, res, next) {
  console.log('-=-=-=-=-',req.body)
    let id = req.body.id
    Queries.toggleTrue(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.render("index", {
          projects: projects
        })
      })
    })

})

router.post('/unchecked/:id', function(req, res, next) {
    let id = req.body.id;
    Queries.toggleFalse(id).then(function(projects) {
      Queries.getAll().then(function(projects) {
        res.render("index", {
          projects: projects
        })
      })
    })

})

router.post('/delete-task', function(req, res, next) {
})

//Other routes will go here

module.exports = router


// if(req.body.delete_item){
//   Queries.addTask(req.body.user_entry).then(function(projects) {
//     Queries.getAll().then(function(projects) {
//       res.render("index", {
//         projects: projects
//       })
//     })
//   })} else {
//     Queries.addTask(req.body.user_entry).then(function(projects) {
//       Queries.getAll().then(function(projects) {
//         res.render("index", {
//           projects: projects
//         })
//       })
//     })
//   }

// (function() {
//   document.querySelector('#todo_container')
//     .addEventListener( 'click', function( event ){
//
//       if( event.path[2].getElementsByTagName('input')[0].checked ){
//         let id = event.path[2].getElementsByTagName('input')[0].id
//
//         id = Number(id);
//
//         Queries.toggleTrue(id).then(function(projects) {
//           Queries.getAll().then(function(projects) {
//             res.render("index", {
//               projects: projects
//             })
//           })
//         })
//         // fetch("'localhost:port/checked/:"+id+"'")
//       } else {
//         let id = event.path[2].getElementsByTagName('input')[0].id
//
//         id = Number(id);
//         Queries.toggleFalse(id).then(function(projects) {
//           Queries.getAll().then(function(projects) {
//             res.render("index", {
//               projects: projects
//             })
//           })
//         })
//
//         // fetch("'localhost:port/unchecked/:"+id+"'")
//       }
//
//     })
// })();
