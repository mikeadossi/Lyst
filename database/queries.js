var pgPromise = require('pg-promise');
var pgp = pgPromise();
var db = pgp(`postgres://${process.env.USER}@localhost:5432/todos`)

var Queries = {
  getAll: function() {
    return db.any('SELECT * FROM todos')
  },
  addTask: function(task) {
    return db.any('INSERT INTO todos(task) VALUES ($1)',[task])
  },
  deleteTask: function(id) {
    return db.none('DELETE from todos WHERE id = $1',[id])
  },
  toggleTrue: function(id) {
    return db.none('UPDATE todos SET iscomplete = true WHERE id = $1', [id])
  },
  toggleFalse: function(id) {
    return db.none('UPDATE todos SET iscomplete = false WHERE id = $1', [id])
  }
  /*
  toggle: function(id) {
    if(radio button = checked) {
        return db.none('UPDATE todos SET iscomplete = TRUE WHERE id = $1', [id])
    } else {
        return db.none('UPDATE todos SET iscomplete = FALSE WHERE id = $1', [id])
    }
  }*/
}

module.exports = Queries;
