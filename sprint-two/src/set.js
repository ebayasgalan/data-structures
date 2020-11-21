// Prototypal class style
var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

// O(1) time complexity: constant
setPrototype.add = function(item) {
  this._storage.push(item);
};

// O(n) time complexity: linear
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

// O(n) time complexity: linear
setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
