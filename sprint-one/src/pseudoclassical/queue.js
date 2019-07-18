var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;

};

Queue.prototype.enqueue = function(value) {
  this.counter++;
  this.storage[this.counter] = value;
}

Queue.prototype.dequeue = function() {
  var shifted = this.storage[1];
  delete this.storage[1];
  if (this.counter > 0) {
    this.counter--;
  }
  var copy = {};
  for (var key in this.storage) {
    var currentKey = key;
    var newKey = key - 1;
    copy[newKey] = this.storage[currentKey];
  }
  this.storage = copy;
  return shifted;
}

Queue.prototype.size = function() {
  return this.counter;
}


