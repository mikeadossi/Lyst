const assert = require('mocha').assert;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised')
const Queries = require('../database/queries.js');

chai.use(chaiAsPromised)

var expect = chai.expect

describe('db.js', function() {


it('allows user to add a task to db & frontend ', function() {
    return Queries.addTask("Unique New Task").then(function() {
      Queries.getAll().then(function(projects) {
        expect(projects).to.include("Unique New Task")
      })
    })

})


it('allows user to delete a task from the db ', function() {

  Queries.toggleTrue(1).then(function() {
    Queries.getAll().then(function(projects) {
      expect(projects[0].iscomplete).to.equal(true)
    })
  })

  Queries.deleteTask().then(function() {
    Queries.getAll().then(function(projects) {
      expect(projects).to.not.include("Unique New Task")
    })
  })

})



it('allows user to change value to true (check off items))', function() {
Queries.addTask("Unique New Task").then(function() {
  Queries.getAll().then(function(projects) {
    expect(projects).to.include("Unique New Task")
    expect(projects[0].iscomplete).to.equal(false)
  })
})
Queries.toggleTrue(2).then(function() {
  Queries.getAll().then(function(projects) {
    expect(projects[0].iscomplete).to.equal(true)
  })
})
})


it('allows user to update input (edit)', function() {
  let value = "New Unique Value";
  Queries.updateInput(2,value).then(function() {
    Queries.getAll().then(function(projects) {
    expect(projects[0].task).to.include("Unique New Task")
    })
  })
})


});
