var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // O(1) time complexity: constant
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  // O(1) time complexity: constant
  list.removeHead = function() {
    if (!list.head) {
      return undefined;
    }
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  // O(n) time complexity: linear
  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


