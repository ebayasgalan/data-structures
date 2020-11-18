var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    size: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    var index = storage.size;
    storage[index] = value;
    storage.size++;
  };

  someInstance.pop = function() {
    var index = storage.size - 1;
    var deleted = storage[index];
    delete storage[index];
    if (storage.size !== 0) {
      storage.size--;
    }
    return deleted;
  };

  someInstance.size = function() {
    return storage.size;
  };

  return someInstance;
};
