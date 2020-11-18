class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {
      size: 0
    };
  }
  push(value) {
    var index = this.storage.size;
    this.storage[index] = value;
    this.storage.size++;
  }
  pop() {
    var index = this.storage.size - 1;
    var deleted = this.storage[index];
    delete this.storage[index];
    if (this.storage.size !== 0) {
      this.storage.size--;
    }
    return deleted;
  }
  size() {
    return this.storage.size;
  }
}