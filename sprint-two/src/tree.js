var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var contained = false;
  var findTarget = function(node) {
    if (node.value === target) {
      contained = true;
    }
    for (var i = 0; i < node.children.length; i++) {
      findTarget(node.children[i]);
    } 
  }
  findTarget(this);
  return contained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
