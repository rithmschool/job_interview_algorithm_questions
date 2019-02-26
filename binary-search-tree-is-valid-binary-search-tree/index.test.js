const { BinarySearchTree } = require('./solution');
const { BSTNode } = require('../_starters/binary-search-tree');

describe('isValid BinarySearchTree', () => {
  const node3 = new BSTNode(3);
  const node8 = new BSTNode(8);
  const node20 = new BSTNode(20);
  const node10 = new BSTNode(10);
  const node25 = new BSTNode(25);
  const node18 = new BSTNode(18);
  const node23 = new BSTNode(23);

  // example of a valid Binary Search Tree;
  const validBST = new BinarySearchTree();
  validBST.insert(20);
  validBST.insert(10);
  validBST.insert(30);
  validBST.insert(15);
  validBST.insert(8);
  validBST.insert(25);
  validBST.insert(22);

  // example of an invalid Binary Search Tree;
  const invalidBST = new BinarySearchTree();
  invalidBST.root = node20;
  invalidBST.root.left = node25;
  invalidBST.root.right = node18;
  invalidBST.root.left.left = node10;
  invalidBST.root.right.left = node8;
  invalidBST.root.left.right = node3;

  // example of another invalid Binary Search Tree;
  const anotherInvalidBST = new BinarySearchTree();
  anotherInvalidBST.root = node20;
  anotherInvalidBST.root.left = node8;
  anotherInvalidBST.root.right = node25;
  anotherInvalidBST.root.left.left = node10;
  anotherInvalidBST.root.right.left = node23;
  anotherInvalidBST.root.left.right = node3;

  const bstWithDuplicates = new BinarySearchTree();
  bstWithDuplicates.insert(20);
  bstWithDuplicates.insert(10);
  bstWithDuplicates.insert(10);
  bstWithDuplicates.insert(15);
  bstWithDuplicates.insert(15);
  bstWithDuplicates.insert(25);
  bstWithDuplicates.insert(22);

  it('Returns a boolean', () => {
    expect(typeof validBST.isValid()).toBe('boolean');
    expect(typeof invalidBST.isValid()).toBe('boolean');
  });

  it('Returns true when BST is valid', () => {
    expect(validBST.isValid()).toBe(true);
  });

  it('Returns false when BST is invalid', () => {
    expect(invalidBST.isValid()).toBe(false);
    expect(anotherInvalidBST.isValid()).toBe(false);
  });

  it('Returns true when bst has duplicates', () => {
    expect(bstWithDuplicates.isValid()).toBe(true);
  });
});
