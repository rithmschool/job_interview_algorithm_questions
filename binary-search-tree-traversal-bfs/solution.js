const {
  BinarySearchTree,
  BSTNode
} = require("../_starters/binary-search-tree");

/**
 * @param {BSTNode}
 */
BinarySearchTree.prototype.bfs = function(current = this.root) {
  if(current === null) return [];
  let queue = [current];
  let order = [];
  while(queue.length) {
    let current = queue.shift();
    if(current.left){
      queue.push(current.left);
    };
    if(current.right) {
      queue.push(current.right);
    };
    if(current.val){
      order.push(current.val);
    };
  };
  return order;
};

module.exports = {
  BinarySearchTree
};