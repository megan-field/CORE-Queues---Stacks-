const {expect} = require('chai');
const {CreateStack} = require('../stack.js');

describe('Stack Data Structure', ()=>{
  it('add data into the stack and increase its size', ()=>{
    let stack = new CreateStack();      
    stack.push('name');  
    expect(stack.size).to.equal(1);    
    for(let i =0;i<5;i++){
      stack.push('bob');
    }
    expect(stack.size).to.equal(6);
    //console.log(stack);
  });
  it('returns stroage with the given data', ()=>{
    let stack = new CreateStack();
    //console.log(stack);
    stack.push('tahir');
    expect(stack.storage[0]).to.equal('tahir');
  });
  it('delete data and decrease the size of stack', ()=>{
    let stack = new CreateStack();
    stack.push('tahir');   
    stack.pop();  
    expect(stack.size).to.equal(0);    
    for(let i =0;i<5;i++){
      stack.push('bob');
    }
    stack.pop('bob'); 
    expect(stack.size).to.equal(4);
    //console.log(stack);
  });
  it('returns stroage with the given name', ()=>{
    let stack = new CreateStack();
    //console.log(stack);
    stack.push('tahir');
    stack.pop();
    expect(Object.keys(stack.storage).length).to.equal(0);
  });
  it('Returns the deleted item once it has been popped', function() {
    let stack = new CreateStack();
    stack.push('Tahir');
    stack.push('Bob');
    stack.pop();
    expect(stack.storage[0]).to.equal('Tahir');
    stack.pop();
    expect(Object.keys(stack.storage).length).to.equal(0);
  }); 
  it('Returns an error if the storage is empty before something has been popped', function() {
    let stack = new CreateStack();
    expect(stack.pop()).to.eql({});
  });

});