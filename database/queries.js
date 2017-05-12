var pgPromise = require('pg-promise');
var pgp = pgPromise();
var db = pgp(`postgres://${process.env.USER}@localhost:5432/todos`)

var Queries = {
  getAll: function() {
    return db.any('SELECT * FROM todos ORDER BY id ASC')
  },
  getCount: function() {
    return db.one('SELECT COUNT(*) FROM todos WHERE iscomplete = false')
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
  },
  updateInput: function(id,value) {
    return db.none('UPDATE todos SET task = $2 WHERE id = $1', [id,value])
  },
  getUser: function(name) {
    return db.any('SELECT * FROM users WHERE username = $1', [name])
  }
  // newTable: function(name) {
  //   return db.any('DROP TABLE IF EXISTS $1; CREATE TABLE $1 (id SERIAL PRIMARY KEY, task VARCHAR(255) NOT NULL, currentTime TIMESTAMP DEFAULT now(), isComplete BOOLEAN DEFAULT FALSE)', [name])
  // }

}

module.exports = Queries;
