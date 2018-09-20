const { BinarySearchTree } = require("./");
const { BSTNode } = require("../_starters/binary-search-tree");

describe("BinarySearchTree#lowestCommonAncestor", () => {
  let bst = new BinarySearchTree();
  let node3, node6, node8, node9, node25, node40, node50;

  beforeAll(() => {
    let nodeValues = [20, 10, 40, 8, 15, 30, 50, 6, 9, 16, 25, 32, 3, 22, 29];
    nodeValues.forEach(val => bst.insert(val));
    node3 = bst.find(3);
    node6 = bst.find(6);
    node8 = bst.find(8);
    node9 = bst.find(9);
    node25 = bst.find(25);
    node40 = bst.find(40);
    node50 = bst.find(50);
  });

  it("returns a BSTNode", () => {
    expect(bst.lowestCommonAncestor(node3, node9)).toBeInstanceOf(BSTNode);
  });

  it("finds the lowest common ancestor", () => {
    expect(bst.lowestCommonAncestor(node3, node9)).toBe(node8);
    expect(bst.lowestCommonAncestor(node25, node50)).toBe(node40);
    expect(bst.lowestCommonAncestor(node9, node25)).toBe(bst.root);
    expect(bst.lowestCommonAncestor(node3, node6)).toBe(node6);
  });

  it("works regardless of the order in which nodes are passed", () => {
    expect(bst.lowestCommonAncestor(node9, node3)).toBe(node8);
    expect(bst.lowestCommonAncestor(node50, node25)).toBe(node40);
    expect(bst.lowestCommonAncestor(node25, node9)).toBe(bst.root);
    expect(bst.lowestCommonAncestor(node6, node3)).toBe(node6);
  });
});
