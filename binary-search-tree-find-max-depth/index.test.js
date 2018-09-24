const { BinarySearchTree } = require("./");

describe("BinarySearchTree#MaxDepth", () => {
  let bst = new BinarySearchTree()
  let currentNode, lowestNode1, lowestNode2, lowestNode3, secondNode1, secondNode2

  beforeAll(() => {
    let nodeValues = [41,20,65,11,29,9,12,25,32,3,10,31,36,50,91,72,99]
    nodeValues.forEach(val => bst.insert(val));
    currentNode = bst.find(41)
    lowestNode1 = bst.find(36)
    lowestNode2 = bst.find(3)
    lowestNode3 = bst.find(10)
    secondNode1 = bst.find(32)
    secondNode2 = bst.find(9)
  })

  it("returns a number", () => {
      expect(bst.maxDepth(currentNode)).toBe(5)
  })

  it("should return the number one once it finds a child with node.left that is null", () => {
    expect(bst.maxDepth(lowestNode1)).toBe(1)
    expect(bst.maxDepth(lowestNode2)).toBe(1)
    expect(bst.maxDepth(lowestNode3)).toBe(1)
  })

  it("should return the number two for variable secondNode1 and secondNode2", () => {
    expect(bst.maxDepth(secondNode2)).toBe(2)
    expect(bst.maxDepth(secondNode1)).toBe(2)
  })
})