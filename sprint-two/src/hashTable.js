

var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var found = false;

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push([k, v]);
    this._size++;
    if (this._size > this._limit * 0.75) {
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);

  if (!bucket) {
    return undefined;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
  
  return null;
};

HashTable.prototype._resize = function(newLimit) {

  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._size = 0;

  oldStorage.each(function(bucket) {
    if (!bucket){ return ;}
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));

};
/*
 * Complexity: What is the time complexity of the above functions?
 insert - Constant O(1)
 retrieve - Linear O(1)
 remove - Linear O(1)
 */