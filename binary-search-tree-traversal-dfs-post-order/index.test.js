const { BinarySearchTree } = require("./");
const { BSTNode } = require("../_starters/binary-search-tree");

describe("BinarySearchTree#DFSPostOrder", () => {
  let bstOne = new BinarySearchTree();
  let bstTwo = new BinarySearchTree();
  let bstThree = new BinarySearchTree();
  let bstFour = new BinarySearchTree();

  beforeAll(() => {
    let newNodesbstOne = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];
    newNodesbstOne.forEach(val => bstOne.insert(val));
    
    let newNodebstTwo = [41, 20, 65, 29, 11, 91, 50, 99, 72, 100];
    newNodebstTwo.forEach(val => bstTwo.insert(val));

    let newNodebstFour = [20, 10, 40, 8, 15, 30, 50, 6, 9, 16, 25, 32, 3, 22, 29];
    newNodebstFour.forEach(val => bstFour.insert(val));
    
  });

  it("should return an array", () => {
    expect(Array.isArray(bstOne.dfsPostOrder())).toBe(true);
    expect(Array.isArray(bstTwo.dfsPostOrder())).toBe(true);
    expect(Array.isArray(bstThree.dfsPostOrder())).toBe(true);
  });

  it("should return an array with the following order", () => {
    expect(bstOne.dfsPostOrder()).toEqual(expect.arrayContaining([20, 27, 25, 37, 35, 47, 45, 60, 85, 75, 65, 50]));
    expect(bstTwo.dfsPostOrder()).toEqual(expect.arrayContaining([11, 29, 20, 50, 72, 100, 99, 91, 65, 41]));
    expect(bstThree.dfsPostOrder()).toEqual(expect.arrayContaining([]));
    expect(bstFour.dfsPostOrder()).toEqual(expect.arrayContaining([3, 6, 9, 8, 16, 15, 10, 22, 29, 25, 32, 30, 50, 40, 20]));
  });

});