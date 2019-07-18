class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  enqueue(value) {
    this.counter++;
    this.storage[this.counter] = value;
  }
  dequeue() {
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
  size() {
    return this.counter;
  }

}
