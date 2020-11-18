var Queue = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {
    size: 0,
    counter: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = storage.size;
    storage[index] = value;
    storage.size++;
  };

  someInstance.dequeue = function() {
    if (storage.size === 0) { return; }
    var deleted = storage.counter;
    delete storage[counter];
    storage.counter++;
    storage.size--;
    return deleted;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
