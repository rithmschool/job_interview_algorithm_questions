const { BinarySearchTree } = require("./");

describe("BinarySearchTree#MaxDepth", () => {
  let bst = new BinarySearchTree();
  let bst2 = new BinarySearchTree();
  let bst3 = new BinarySearchTree();
  let lowestNode1, lowestNode2, lowestNode3, secondNode1, secondNode2, lowest2Node1, lowest2Node2

  beforeAll(() => {
    let nodeValues = [41, 20, 65, 11, 29, 9, 12, 25, 32, 3, 10, 31, 36, 50, 91, 72, 99];
    nodeValues.forEach(val => bst.insert(val));

    lowestNode1 = bst.find(36);
    lowestNode2 = bst.find(3);
    lowestNode3 = bst.find(10);
    secondNode1 = bst.find(32);
    secondNode2 = bst.find(9);

    let nodeValues2 = [9,11,7];
    nodeValues2.forEach(val => bst2.insert(val));
    lowest2Node1 = bst2.find(7);
    lowest2Node2 = bst2.find(11);

    let nodeValues3 = [20, 10, 40, 8, 15, 30, 50, 6, 9, 16, 25, 32, 3, 22, 29];
    nodeValues3.forEach(val => bst3.insert(val));
  });

  it("returns a number", () => {
    expect(bst.maxDepth()).toBe(5);
    expect(bst2.maxDepth()).toBe(2);
    expect(bst3.maxDepth()).toBe(5);
  });

  it("should return the number one when there are no children for current the node(current.left === null && current.right === null)", () => {
    expect(bst.maxDepth(lowestNode1)).toBe(1);
    expect(bst.maxDepth(lowestNode2)).toBe(1);
    expect(bst.maxDepth(lowestNode3)).toBe(1);
    expect(bst.maxDepth(lowest2Node1)).toBe(1);
    expect(bst.maxDepth(lowest2Node2)).toBe(1);
  });

  it("should return the number two for parents of the children with no grandchildren", () => {
    expect(bst.maxDepth(secondNode2)).toBe(2);
    expect(bst.maxDepth(secondNode1)).toBe(2);
  });

});
