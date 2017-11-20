function createQueue() {
  const queue = {
    size : 0,
    storage : {},
    enqueue: function(data) {
      this.storage[this.size] = data;
      this.size++;   
    },  // enqueue function
    dequeue: function(){
      if (Object.keys(this.storage).length > 0){
        let index = Object.keys(this.storage).length - this.size;
        let deletedItem = this.storage[index];
        delete this.storage[index];
        this.size--;
        return deletedItem;
      }
      return {};
    }   // dequeue function  
  };  // queue
  return queue;
} // queue
module.exports = {createQueue};