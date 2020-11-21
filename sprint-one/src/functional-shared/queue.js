var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  someInstance.storage = {
    last: 0,
    counter: 0
  };

  // Implement the methods below

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    var index = this.storage.last;
    this.storage[index] = value;
    this.storage.last++;
  },
  dequeue: function() {
    if (this.storage.last === 0) { return; }
    var index = this.storage.counter;
    var deleted = this.storage[index];
    delete this.storage[index];
    if (this.storage.counter < this.storage.last) {
      this.storage.counter++;
    }
    return deleted;
  },
  size: function() {
    return (this.storage.last - this.storage.counter);
  }
};


