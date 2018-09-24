const { BinarySearchTree } = require("./");

describe("BinarySearchTree#MaxDepth", () => {
  let bst = new BinarySearchTree()
  let currentNode, lowestNode1, lowestNode2, secondNode1, secondNode2

  beforeAll(() => {
    let nodeValues = [20, 10, 40, 8, 15, 30, 50, 6, 9, 16, 25, 32, 3, 22, 29];
    nodeValues.forEach(val => bst.insert(val));
    currentNode = bst.find(20)
    lowestNode1 = bst.find(3)
    lowestNode2 = bst.find(22)
    secondNode1 = bst.find(25)
    secondNode2 = bst.find(6)
  })

  it("returns a number", () => {
      expect(bst.maxDepth(currentNode)).toBe(5)
  })

  it("should return the number one once it finds a child with node.left is null", () => {
    expect(bst.maxDepth(lowestNode1)).toBe(1)
    expect(bst.maxDepth(lowestNode2)).toBe(1)
  })

  it("should return the number two for variable secondNode1 and secondNode2", () => {
    expect(bst.maxDepth(secondNode1)).toBe(2)
    expect(bst.maxDepth(secondNode2)).toBe(2)
  })
})