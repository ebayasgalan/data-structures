var Queue = function() {
  var someInstance = {
  };

  // Use an object with numeric keys to store values
  var storage = {
    last: 0,
    counter: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = storage.last;
    storage[index] = value;
    storage.last++;
  };

  someInstance.dequeue = function() {
    if (storage.last === 0) { return; }
    var index = storage.counter;
    var deleted = storage[index];
    delete storage[index];
    if (storage.counter < storage.last) {
      storage.counter++;
    }
    return deleted;
  };

  someInstance.size = function() {
    return (storage.last - storage.counter);
  };

  return someInstance;
};
