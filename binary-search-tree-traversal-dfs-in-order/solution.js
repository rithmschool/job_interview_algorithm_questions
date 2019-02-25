const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} [current = this.root]
 * @param {Array} [order = []]
 * @returns {Array}
 */
BinarySearchTree.prototype.dfsInOrder = function dfsInOrder(current = this.root, order = []) {
  if (current === null) return order;
  if (current.left) {
    this.dfsInOrder(current.left, order);
  }
  if (current.val) {
    order.push(current.val);
  }
  if (current.right) {
    this.dfsInOrder(current.right, order);
  }
  return order;
};

module.exports = {
  BinarySearchTree
};
