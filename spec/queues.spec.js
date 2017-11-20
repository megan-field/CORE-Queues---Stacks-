const {expect} = require('chai');
const {createQueue} = require('../queue.js');

describe.only('Queue Data Structure', ()=>{
  it('Returns the size of the queue as zero before anything has been enqueued, and returns the count after and returns 1 when an items has been enetered.', function() {
    let queue = createQueue();
    expect(queue.size).to.equal(0);
    queue.enqueue('name');  
    expect(queue.size).to.equal(1);
  
  });
  it('add data into the queue and increase its size', ()=>{
    let queue = createQueue();         
    for(let i =0;i<5;i++){
      queue.enqueue('bob');
    }
    expect(queue.size).to.equal(5); 
    //console.log(queue);
  });
  it('returns stroage with the given data', ()=>{
    let queue = createQueue();
    //console.log(queue);
    queue.enqueue('tahir');
    expect(queue.storage[0]).to.equal('tahir');
  });
  it('delete data and decrease the size of queue', ()=>{
    let queue = createQueue();
    queue.enqueue('tahir');   
    queue.dequeue();  
    expect(queue.size).to.equal(0);    
    for(let i =0;i<5;i++){
      queue.enqueue('bob');
    }
    queue.dequeue('bob'); 
    expect(queue.size).to.equal(4);
    //console.log(queue);
  });
  it('Returns the first item of queue if we have deleted one item', function() {
    let queue = createQueue();
    queue.enqueue('Tahir');
    queue.enqueue('Sally');
    queue.enqueue('Jade');
    queue.enqueue('Megan');
    queue.enqueue('Sam');
    queue.enqueue('Bob');
    expect(queue.dequeue()).to.equal('Tahir');
  }); 
  it('Returns an empty object if the storage is empty before something has been dequeueped', function() {
    let queue = createQueue();
    expect(queue.dequeue()).to.eql({});
  });
});