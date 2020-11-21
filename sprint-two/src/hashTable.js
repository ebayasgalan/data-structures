// pseudoclassical style

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// O(1) time complexity: constant
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
  } else {
    this._storage.get(index).forEach(bucket => {
      if (bucket[0] === k) {
        bucket[1] = v;
      }
    });
    this._storage.get(index).push([k, v]);
  }
};

// O(n) time complexity: linear
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var elem = this._storage.get(index);
  var result;
  elem.forEach(el => {
    if (el[0] === k) {
      result = el[1];
    }
  });
  return result;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).forEach(elem => {
    if (elem[0] === k) {
      delete elem[1];
    }
  });
};

