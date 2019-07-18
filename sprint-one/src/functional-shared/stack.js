var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Use an object with numeric keys to store values
  var someInstance = {
    storage: {},
    counter: 0
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.counter ++;
    this.storage[this.counter] = value;
  },
  
  pop: function() {
    var popped = this.storage[this.counter];
    delete this.storage[this.counter];
    if (this.counter > 0) { 
      this.counter--; 
    }
    return popped;
  },
  
  size: function() {
    return this.counter;
  }
};


