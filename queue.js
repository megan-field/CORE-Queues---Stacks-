function CreateQueue() {
  this.size = 0;
  this.storage = {};
}  

CreateQueue.prototype.enqueue = function(data) {
  this.storage[this.size] = data;
  this.size++; 
};

CreateQueue.prototype.dequeue = function(){
  if (Object.keys(this.storage).length > 0){
    let index = Object.keys(this.storage).length - this.size;
    let deletedItem = this.storage[index];
    delete this.storage[index];
    this.size--;
    return deletedItem;
  }
  return {};
};
module.exports = {CreateQueue};