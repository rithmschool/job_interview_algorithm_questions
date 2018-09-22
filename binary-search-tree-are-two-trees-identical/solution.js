function areIdentical(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }

  if (root1 && root2) {
    return (root1.val === root2.val &&
            areIdentical(root1.left, root2.left) &&
            areIdentical(root1.right, root2.right));
  }

  return false;
}

