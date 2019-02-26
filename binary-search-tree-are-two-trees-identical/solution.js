const { BinarySearchTree } = require('../_starters/binary-search-tree');

BinarySearchTree.areIdentical = function areIdentical(rootOne, rootTwo) {
  if (rootOne === null && rootTwo === null) {
    return true;
  }
  if (rootOne && rootTwo) {
    if (rootOne.val === rootTwo.val) {
      const left = BinarySearchTree.areIdentical(rootOne.left, rootTwo.left);
      const right = BinarySearchTree.areIdentical(rootOne.right, rootTwo.right);
      return left && right;
    }
  }
  return false;
};

module.exports = {
  BinarySearchTree
};
