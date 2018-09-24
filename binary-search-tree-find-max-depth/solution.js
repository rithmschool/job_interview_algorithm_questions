const { BinarySearchTree, BSTNode } = require("../_starters/binary-search-tree");

/**
 * @param {BSTNode} 
 * @return {number}
 */
BinarySearchTree.prototype.maxDepth = function(BSTNode=this.root) {
  if (BSTNode === null) return 0
  let left = this.maxDepth(BSTNode.left)
  let right = this.maxDepth(BSTNode.right)
  return Math.max(left, right) + 1
}

module.exports = { BinarySearchTree };