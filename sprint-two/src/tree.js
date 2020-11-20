var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// O(1) time complexity: constant
treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
  this.value = value;
};

// O(n) time complexity: linear
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
