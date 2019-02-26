const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} [current=this.root]
 * @param {(number|null)} [min=null]
 * @param {(number|null)} [max=null]
 * @return {boolean}
 */
BinarySearchTree.prototype.isValid = function isValid(current = this.root, min = null, max = null) {
  if (current === null) {
    return true;
  }
  const nodeTooSmall = current.val < min;
  // need to check explicitly if max is not null because (any number > null) always equates to true
  const nodeTooLarge = max !== null ? current.val > max : false;

  if (nodeTooSmall || nodeTooLarge) {
    return false;
  }
  const checkLeft = this.isValid(current.left, null, current.val);
  const checkRight = this.isValid(current.right, current.val, null);

  return checkLeft && checkRight;
};

module.exports = {
  BinarySearchTree
};
