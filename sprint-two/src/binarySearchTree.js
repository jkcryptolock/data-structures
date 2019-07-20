var BinarySearchTree = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  
  BinarySearchTree.prototype.insert = function(value) {
    var twig = new BinarySearchTree(value);
  
    if (twig.value < this.value) {
      if (this.left === null) {
        this.left = twig;
        return this;
      } else {
        this.left.insert(value);
      }
    }
  
    if (twig.value > this.value) {
      if (this.right === null) {
        this.right = twig;
        return this;
      } else {
        this.insert.call(this.right, value);
      }
    }
  };
  
  BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) {
      return true;
    }
  
    if (value < this.value) {
      if (this.left !== null) {
        return this.contains.call(this.left, value);
      } else {
        return false;
      }
    }
  
    if (value > this.value) {
      if (this.right !== null) {
        return this.contains.call(this.right, value);
      } else {
        return false;
      }
    }
  };
  
  BinarySearchTree.prototype.depthFirstLog = function(cb) {
    this.value = cb(this.value);
    
    if (this.left !== null) {
      this.depthFirstLog.call(this.left, cb);
    }
    
    if (this.right !== null) {
      this.depthFirstLog.call(this.right, cb);
    }
    
    return this;
  };



/*
 * Complexity: What is the time complexity of the above functions?
 */
