const {
  BinarySearchTree
} = require("./");

describe("areIdentical BinarySearchTree", () => {
  let firstBST = new BinarySearchTree();
  let secondBST = new BinarySearchTree();
  let thirdBST = new BinarySearchTree();
  let fourthBST = new BinarySearchTree();

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

  fourthBST.insert(10);
  fourthBST.insert(30);
  fourthBST.insert(20);
  fourthBST.insert(22);
  fourthBST.insert(8);
  fourthBST.insert(25);
  fourthBST.insert(15);


  it("Returns a boolean", () => {
    expect(typeof (firstBST.areIdentical(firstBST.root, secondBST.root))).toBe('boolean');
    expect(typeof (secondBST.areIdentical(secondBST.root, thirdBST.root))).toBe('boolean');
    expect(typeof (firstBST.areIdentical(firstBST.root, thirdBST.root))).toBe('boolean');
  })

  it("Returns true when both trees have the same values in the same order", () => {
    expect(firstBST.areIdentical(firstBST.root, secondBST.root)).toBe(true);
  })

  it("Returns false when the two trees have different values", () => {
    expect(firstBST.areIdentical(firstBST.root, thirdBST.root)).toBe(false);
  })

  it("Returns false when two trees have same values but different order", () => {
    expect(firstBST.areIdentical(firstBST.root, fourthBST.root)).toBe(false);
  })
})