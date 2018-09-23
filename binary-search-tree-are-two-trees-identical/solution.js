BinarySearchTree.prototype.areIdentical = function (root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (root1.val === root2.val &&
      BinarySearchTree.areIdentical(root1.left, root2.left) &&
      BinarySearchTree.areIdentical(root1.right, root2.right));
  }

  return false;
}

module.exports = {
  BinarySearchTree
};