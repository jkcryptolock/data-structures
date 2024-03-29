var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item]
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 - Constant, because we are doing direct value lookups - O(1)
 */
