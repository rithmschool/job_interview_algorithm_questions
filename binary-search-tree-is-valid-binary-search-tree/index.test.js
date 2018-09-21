const { BinarySearchTree } = require("./");
const { BSTNode } = require("../_starters/binary-search-tree");


describe("isValid BinarySearchTree", () => {
  let node3 = new BSTNode(3);
  let node8 = new BSTNode(8);
  let node20 = new BSTNode(20);
  let node10 = new BSTNode(10);
  let node25 = new BSTNode(25);
  let node18 = new BSTNode(18);
  let node23 = new BSTNode(23);

//example of a valid Binary Search Tree;
  let validBST = new BinarySearchTree();
  validBST.insert(20);
  validBST.insert(10);
  validBST.insert(30);
  validBST.insert(15);
  validBST.insert(8);
  validBST.insert(25);
  validBST.insert(22);




//example of an invalid Binary Search Tree;
  let inValidBST = new BinarySearchTree();
  inValidBST.root = node20;
  inValidBST.root.left = node25;
  inValidBST.root.right = node18;
  inValidBST.root.left.left = node10;
  inValidBST.root.right.left = node8;
  inValidBST.root.left.right = node3;


//example of another invalid Binary Search Tree;
  let anotherInvalidBST = new BinarySearchTree();
  anotherInvalidBST.root = node20;
  anotherInvalidBST.root.left = node8;
  anotherInvalidBST.root.right = node25;
  anotherInvalidBST.root.left.left = node10;
  anotherInvalidBST.root.right.left = node23;
  anotherInvalidBST.root.left.right = node3;

  it("Returns a boolean", () => {
    expect(typeof(validBST.isValid(validBST.root))).toBe('boolean');
    expect(typeof(inValidBST.isValid(inValidBST.root))).toBe('boolean');
  })

  it("Returns true when BST is valid", () => {
    console.log(validBST);
    expect(validBST.isValid(validBST.root)).toBe(true);

  })

  it("Returns false when BST is invalid", () => {
    expect(inValidBST.isValid(inValidBST.root)).toBe(false);
    expect(anotherInvalidBST.isValid(anotherInvalidBST.root)).toBe(false);
  })
});