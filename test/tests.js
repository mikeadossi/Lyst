const assert = require('mocha').assert;
const expect = require('chai').expect;
const queries = require('../database/queries.js');

describe('db.js', () => {
  describe('get all tasks', () => {
    it('allows user to add a task to db & frontend ', (done) => {
      queries.getAll()
        .then(todone => queries.iscompleted(todone[0].id))
        .catch(done);
    });
  });
