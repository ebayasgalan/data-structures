// Instantiate a new graph
var Graph = function() {
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.edges.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.edges[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // console.log('fromNode: ', fromNode, 'toNode: ', toNode);
  // return (this.edges.hasOwnProperty(fromNode) && this.edges.hasOwnProperty(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // console.log('fromNode: ', fromNode, 'toNode: ', toNode);
  // console.log('thisEdges: ', this.edges);
  // var edges = {};
  // var newEdge = Graph();
  // newEdge.addNode(fromNode);
  // newEdge.addNode(toNode);
  this.edges[fromNode] = toNode;
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


