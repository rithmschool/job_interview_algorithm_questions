const {
  BinarySearchTree
} = require('../_starters/binary-search-tree')

BinarySearchTree.prototype.isValid = function (current = this.root, min = null, max = null) {
  if (current === null) {
    return true;
  }
  let nodeTooSmall = current.val < min;
  let nodeTooLarge = max !== null ? current.val > max : false;

  if (nodeTooSmall || nodeTooLarge) {
    return false;
  }
  return (this.isValid(current.left, min = null, max = current.val) && this.isValid(current.right, min = current.val, max = null))
};

module.exports = {
  BinarySearchTree
}