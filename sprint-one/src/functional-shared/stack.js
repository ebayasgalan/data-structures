var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  };

  someInstance.storage = {
    size: 0
  };

  // Implement the methods below

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var index = this.storage.size;
    this.storage[index] = value;
    this.storage.size++;
  },
  pop: function() {
    var index = this.storage.size - 1;
    var deleted = this.storage[index];
    delete this.storage[index];
    if (this.storage.size !== 0) {
      this.storage.size--;
    }
    return deleted;
  },
  size: function() {
    return this.storage.size;
  }
};


