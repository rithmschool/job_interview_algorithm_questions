const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} [current = this.root]
 * @param {Array} [order = []]
 * @returns {Array}
 */
BinarySearchTree.prototype.dfsPostOrder = function dfsPostOrder(current = this.root, order = []) {
  if (current === null) return order;
  if (current.left) {
    this.dfsPostOrder(current.left, order);
  }
  if (current.right) {
    this.dfsPostOrder(current.right, order);
  }
  if (current.val) {
    order.push(current.val);
  }
  return order;
};

module.exports = {
  BinarySearchTree
};
