const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} [current=this.root]
 * @return {number}
 */
BinarySearchTree.prototype.maxDepth = function maxDepth(current = this.root) {
  if (current === null) return 0;
  const left = this.maxDepth(current.left);
  const right = this.maxDepth(current.right);
  return Math.max(left, right) + 1;
};

module.exports = { BinarySearchTree };
