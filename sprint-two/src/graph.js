// Instantiate a new graph
var Graph = function() {
  this.edges = {};
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      delete this.nodes[i];
    }
  }
  var entries = Object.entries(this.edges);
  for (var [key, val] of entries) {
    if (key.includes(node.toString())) { delete this.edges[key]; }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edge = JSON.stringify(`${fromNode}to${toNode}`);
  return this.edges.hasOwnProperty(edge);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[JSON.stringify(`${fromNode}to${toNode}`)] = true;
  this.edges[JSON.stringify(`${toNode}to${fromNode}`)] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edge1 = JSON.stringify(`${fromNode}to${toNode}`);
  var edge2 = JSON.stringify(`${toNode}to${fromNode}`);
  if (this.edges.hasOwnProperty(edge1)) {
    delete this.edges[edge1];
    delete this.edges[edge2];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(node => {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


