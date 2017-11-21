function CreateStack() {
  this.size = 0;
  this.storage = {};
} 

CreateStack.prototype.push = function(data) {
  this.storage[this.size] = data;
  this.size++;   
};

CreateStack.prototype.pop = function(){
  if (Object.keys(this.storage).length > 0){
    let deletedItem = this.storage[this.size];
    delete this.storage[this.size-1];
    this.size--;
    return deletedItem;
  }
  return {};
};

module.exports = {CreateStack};