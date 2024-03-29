

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = NodeList(value);
    if (!list.head) { 
      list.head = newNode;
    }
    if (list.tail) { 
      list.tail.next = newNode; 
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    function findTarget(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return findTarget(node.next);
    }
    return findTarget(list.head);
  };

  return list;
  
};

var NodeList = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail - O(1);
 removeHead - O(1);
 contains - O(n);
 */
