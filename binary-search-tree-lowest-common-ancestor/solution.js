const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} node1
 * @param {BSTNode} node2
 * @return {BSTNode}
 */
BinarySearchTree.prototype.lowestCommonAncestor = function lowestCommonAncestor(node1, node2) {
  let ancestor = this.root;
  const minVal = Math.min(node1.val, node2.val);
  const maxVal = Math.max(node1.val, node2.val);
  while (true) {
    if (ancestor.val > maxVal) ancestor = ancestor.left;
    else if (ancestor.val < minVal) ancestor = ancestor.right;
    else return ancestor;
  }
};

module.exports = { BinarySearchTree };
