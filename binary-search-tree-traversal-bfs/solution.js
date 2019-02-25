const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} [current = this.root]
 * @return {Array}
 */
BinarySearchTree.prototype.bfs = function bfs(current = this.root) {
  if (current === null) return [];
  const queue = [current];
  const order = [];
  while (queue.length) {
    const next = queue.shift();
    if (next.left) {
      queue.push(next.left);
    }
    if (next.right) {
      queue.push(next.right);
    }
    if (next.val) {
      order.push(next.val);
    }
  }
  return order;
};

module.exports = {
  BinarySearchTree
};
