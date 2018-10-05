const { BinarySearchTree } = require("./");
const { BSTNode } = require("../_starters/binary-search-tree");

describe("BinarySearchTree#BFS", () => {
  let bstOne = new BinarySearchTree();
  let bstTwo = new BinarySearchTree();
  let bstThree = new BinarySearchTree();

  beforeAll(() => {
    let newNodesbstOne = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];
    newNodesbstOne.forEach(val => bstOne.insert(val));
    
    let newNodebstTwo = [41, 20, 65, 29, 11, 91, 50, 99, 72, 100];
    newNodebstTwo.forEach(val => bstTwo.insert(val));
  });

  it("should return an array", () => {
    expect(Array.isArray(bstOne.bfs())).toBe(true);
    expect(Array.isArray(bstTwo.bfs())).toBe(true);
    expect(Array.isArray(bstThree.bfs())).toBe(true);
  });

  it("should return an array with the following order", () => {
    expect(bstOne.bfs()).toEqual([50, 45, 65, 35, 47, 60, 75, 25, 37, 85, 20, 27 ]);
    expect(bstTwo.bfs()).toEqual([41, 20, 65, 11, 29, 50, 91, 72, 99, 100 ]);
    expect(bstThree.bfs()).toEqual([]);
  });

});
