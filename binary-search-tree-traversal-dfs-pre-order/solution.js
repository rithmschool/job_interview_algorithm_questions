const {
  BinarySearchTree,
  BSTNode
} = require("../_starters/binary-search-tree");

/**
 * @param {BSTNode} [current = this.root]
 * @param {Array} [order = []]
 * @returns {Array}
 */
BinarySearchTree.prototype.dfsPreOrder = function(current = this.root, order = []) {
  if (current === null) return order;
  if (current.val) {
    order.push(current.val);
  };
  if (current.left) {
    this.dfsPreOrder(current.left, order);
  };
  if (current.right) {
    this.dfsPreOrder(current.right, order);
  };
  return order;
};

module.exports = {
  BinarySearchTree
};
