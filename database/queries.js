var pgPromise = require('pg-promise');
var pgp = pgPromise();
var db = pgp(`postgres://${process.env.USER}@localhost:5432/todos`)

var Queries = {
  getAll: function() {
    return db.any('SELECT * FROM todos')
  }
  //add other queries
}

module.exports = Queries;
