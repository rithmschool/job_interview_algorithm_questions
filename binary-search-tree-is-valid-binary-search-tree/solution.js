BinarySearchTree.prototype.isValid = function(root,max=null,min=null) {
  if(root === null) {
    return true;
  }
  if(max === null && min !== null) {
    if(root.val < min) {
      return false;
    }
  }
  if(max !== null && min === null) {
    if(root.val > max) {
      return false;
    }
  }
  return this.isValid(root.left, max = root.val, min = null) && this.isValid(root.right, max = null, min = root.val);
};
