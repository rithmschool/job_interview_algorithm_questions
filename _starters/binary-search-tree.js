class BSTNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val) {
    let newNode = new BSTNode(val);
    if (this.root === null) {
      // if the tree is empty, add a root node
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // figure out whether we should move left or right
      let direction = val < current.val ? "left" : "right";
      if (current[direction] === null) {
        // if there's a spot open, put the node there
        current[direction] = newNode;
        return this;
      }
      // if there's no open spot, move to the next node
      current = current[direction];
    }
  }

  find(val) {
    let current = this.root;
    while (current !== null) {
      if (current.val === val) return current;
      else if (val < current.val) current = current.left;
      else current = current.right;
    }
    return current;
  }
}

module.exports = { BinarySearchTree, BSTNode };