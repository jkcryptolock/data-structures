var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function() {
    var shifted = storage[1];
    delete storage[1];
    if (counter > 0) { 
      counter--; 
    }
    var copy = {};
    for (var key in storage) {
      var currentKey = key;
      var newKey = key - 1;
      copy[newKey] = storage[currentKey];
    }
    storage = copy;
    return shifted;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
