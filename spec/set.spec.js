const {expect} = require('chai');
const {createSet} = require('../set.js');

describe('Set Data Structure', ()=>{
  it('Stack should have an add prototype.', function() {
    let set = new CreateSet();
    let expected;
    for (const key in stack) {
      if (key === 'addProperty') expected = true;
    }
    expect(expected).to.be.true;
  });
  it('Adds a property to the object stack', function() {
    let set = new CreateSet();
    expect(set.addProperty('sayName')).to.equal(set.sayName);
  });
});



//add
//same tests as push for stack.
//cannot add duplicate values.
//works if the methods are chained!

//clear
//make sure it deletes everything
//size should be 0
//edge cases

//delete
//returning a boolean
//deletes the asked for item from the array
//size should -1 each time

//entries
//creates a new array
//finds the correct value asked for
//returns it repeated

//forEach
// makes sure each item is being called upon

//has
//returns a boolean
//checks the array for the correct match

//values
//returns all of the Object.values()
// returning them in order