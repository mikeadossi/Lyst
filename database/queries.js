var pgPromise = require('pg-promise');
var pgp = pgPromise();
var db = pgp(`postgres://${process.env.USER}@localhost:5432/todos`)

var Queries = {
  getAll: function() {
    return db.any('SELECT * FROM todos')
  },
  addTask: function(task) {
    return db.any('INSERT INTO todos(task) VALUES ($1)',[task])
  }

}

module.exports = Queries;
