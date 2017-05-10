var pgPromise = require('pg-promise');
var pgp = pgPromise();
var db = pgp(`postgres://${process.env.USER}@localhost:5432/todos`)

var Queries = {
  getAll: function() {
    return db.any('SELECT * FROM todos ORDER BY id ASC')
  },
  addTask: function(task) {
    return db.any('INSERT INTO todos(task) VALUES ($1)',[task])
  },
  deleteTask: function() {
    return db.none('DELETE from todos WHERE iscomplete = TRUE')
  },
  toggleTrue: function(id) {
    return db.none('UPDATE todos SET iscomplete = true WHERE id = $1', [id])
  },
  toggleFalse: function(id) {
    return db.none('UPDATE todos SET iscomplete = false WHERE id = $1', [id])
  }
}

module.exports = Queries;
