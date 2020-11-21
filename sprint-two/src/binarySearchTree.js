var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.value = value;
  binaryTree.right = null;
  binaryTree.left = null;
  return binaryTree;
};
// O(n) time complexity: linear
BinarySearchTree.prototype = {
  insert: function(value) {
    if (value <= this.value) {
      if (!this.left) { this.left = BinarySearchTree(value); } else { this.left.insert(value); }
    } else if (value > this.value) {
      if (!this.right) { this.right = BinarySearchTree(value); } else { this.right.insert(value); }
    }
  },
  // O(n) time complexity: linear
  contains: function(value) {
    if (value === this.value) { return true; } else if (value < this.value) {
      if (!this.left) { return false; } else { return this.left.contains(value); }
    } else if (value > this.value) {
      if (!this.right) { return false; } else { return this.right.contains(value); }
    }
  },
  // O(n) time complexity: linear
  depthFirstLog: function(iteratorFunc) {
    iteratorFunc(this.value);
    if (this.left) {
      this.left.depthFirstLog(iteratorFunc);
    }
    if (this.right) {
      this.right.depthFirstLog(iteratorFunc);
    }
  }
};
