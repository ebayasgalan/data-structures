var BinarySearchTree = function(value) {
  var binaryTree = Object.create(BinarySearchTree.prototype);
  binaryTree.value = value;
  binaryTree.right = null;
  binaryTree.left = null;
  return binaryTree;
};

BinarySearchTree.prototype = {
  insert: function(value) {
    if (value <= this.value) {
      if (!this.left) { this.left = BinarySearchTree(value); } else { this.left.insert(value); }
    } else if (value > this.value) {
      if (!this.right) { this.right = BinarySearchTree(value); } else { this.right.insert(value); }
    }
  },
  contains: function(value) {
    if (value === this.value) { return true; } else if (value < this.value) {
      if (!this.left) { return false; } else { return this.left.contains(value); }
    } else if (value > this.value) {
      if (!this.right) { return false; } else { return this.right.contains(value); }
    }
  },
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


/*
 * Complexity: What is the time complexity of the above functions?
 */

//  // iteratorFunc(this.value);
// // if (this.right) { this.right.depthFirstLog(iteratorFunc(this.value)); }
// if (this.left) {
//   console.log('left branch exists', this.left);
//   // this.left.depthFirstLog(iterate(this.value));
// }
// if (this.right) {
//   console.log('right branch exists', this.righ);
//   // this.right.depthFirstLog(iterate(this.value));
// }

// // if (this.left) { this.left.depthFirstLog(iteratorFunc(this.value)); }


// var recurse = function(bst) {
//   iteratorFunc.call(bst, bst.value);
//   if (bst.left !== undefined) {
//     recurse(bst.left);
//   }
//   if (bst.right !== undefined) {
//     recurse(bst.right);
//   }
// };
// console.log(this);
// recurse(this);