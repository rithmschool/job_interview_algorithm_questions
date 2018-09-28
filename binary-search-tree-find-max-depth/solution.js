const {BinarySearchTree, BSTNode} = require("../_starters/binary-search-tree");

/**
 * @param {BSTNode} [current=this.root]
 * @return {number}
 */
BinarySearchTree.prototype.maxDepth = function(current = this.root) {
  if (current === null) return 0;
  let left = this.maxDepth(current.left);
  let right = this.maxDepth(current.right);
  return Math.max(left, right) + 1;
};

module.exports = { BinarySearchTree };
