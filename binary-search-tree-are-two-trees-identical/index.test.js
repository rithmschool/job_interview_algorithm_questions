const { areIdentical } = require("./");
const { BinarySearchTree } = require("../_starters/binary-search-tree");

describe("areIdentical BinarySearchTree", () => {
  let firstBST = new BinarySearchTree();
  let secondBST = new BinarySearchTree();
  let thirdBST = new BinarySearchTree();

  firstBST.insert(20);
  firstBST.insert(10);
  firstBST.insert(30);
  firstBST.insert(15);
  firstBST.insert(8);
  firstBST.insert(25);
  firstBST.insert(22);

  secondBST.insert(20);
  secondBST.insert(10);
  secondBST.insert(30);
  secondBST.insert(15);
  secondBST.insert(8);
  secondBST.insert(25);
  secondBST.insert(22);

  thirdBST.insert(15);
  thirdBST.insert(17);
  thirdBST.insert(9);
  thirdBST.insert(4);
  thirdBST.insert(12);
  thirdBST.insert(20);
  thirdBST.insert(2);
  thirdBST.insert(18);

  it("Returns a boolean", () => {
    expect(typeof(areIdentical(firstBST.root, secondBST.root))).toBe('boolean');
    expect(typeof(areIdentical(secondBST.root, thirdBST.root))).toBe('boolean');
    expect(typeof(areIdentical(firstBST.root, thirdBST.root))).toBe('boolean');
  })

  it("Returns true when both trees are identical", () => {
    expect(areIdentical(firstBST.root, secondBST.root)).toBe(true);
  })

  it("Returns false when both trees are not identical", () => {
    expect(areIdentical(firstBST.root, thirdBST.root)).toBe(false);
  })
})