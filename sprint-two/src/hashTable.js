var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};
// O(1): constant time complexity
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
  let found = false;
  // iterate over to update if key exists
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }
  // add new tuple if no key is found and resize if needed
  if (!found) {
    bucket.push([k, v]);
    this._count++;
    if (this._count > this._limit * .75) {
      this.resize(this._limit * 2);
    }
  }
};
// O(n): linear time complexity
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { return undefined; }
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return null;
};
// O(n): linear time complexity
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * .25) {
        this.resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (let i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};