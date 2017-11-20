function createStack(){
  const stack = {
    size : 0,
    storage : {},
    push: function(data) {
      this.storage[this.size] = data;
      this.size++;   
    },  // push function
    pop: function(){
      let deletedItem = this.storage[this.size];
      delete this.storage[this.size-1];
      this.size--;
      return deletedItem;
    }   // pop function  
  };  // stack
  return stack;
} // createStack
module.exports = {createStack};