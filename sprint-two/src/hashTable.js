var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

var HashNode = function (key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    this._storage[index] = new Array();
    console.log('testing: ', this._storage[index]);
    for (var i = 0; i < this._storage[index]; i++) {
      if (this._storage[index][i] === undefined) {
        this._storage[index][i] = v;
      }
    }
  }
  this._storage.set(index, v);
  console.log('thisStorage: ', this._storage.get(index));
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log(this._storage.get(index));
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// HashTable.prototype.hash = function(key) {
//   var total = 0;
//   for (var i = 0; i < key.length; i++) {
//     total += key.charCodeAt(i);
//   }
//   var bucket = total % this._limit;
//   return bucket;
// };


