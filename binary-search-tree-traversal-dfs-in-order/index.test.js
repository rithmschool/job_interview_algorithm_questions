const { BinarySearchTree } = require('./');

describe('BinarySearchTree#DFSInOrder', () => {
  const bstOne = new BinarySearchTree();
  const bstTwo = new BinarySearchTree();
  const bstThree = new BinarySearchTree();
  const bstFour = new BinarySearchTree();

  beforeAll(() => {
    const newNodesbstOne = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];
    newNodesbstOne.forEach(val => bstOne.insert(val));

    const newNodebstTwo = [41, 20, 65, 29, 11, 91, 50, 99, 72, 100];
    newNodebstTwo.forEach(val => bstTwo.insert(val));

    const newNodebstFour = [20, 10, 40, 8, 15, 30, 50, 6, 9, 16, 25, 32, 3, 22, 29];
    newNodebstFour.forEach(val => bstFour.insert(val));
  });

  it('should return an array', () => {
    expect(Array.isArray(bstOne.dfsInOrder())).toBe(true);
    expect(Array.isArray(bstTwo.dfsInOrder())).toBe(true);
    expect(Array.isArray(bstThree.dfsInOrder())).toBe(true);
  });

  it('should return an array with the following order', () => {
    expect(bstOne.dfsInOrder()).toEqual([20, 25, 27, 35, 37, 45, 47, 50, 60, 65, 75, 85]);
    expect(bstTwo.dfsInOrder()).toEqual([11, 20, 29, 41, 50, 65, 72, 91, 99, 100]);
    expect(bstThree.dfsInOrder()).toEqual([]);
    expect(bstFour.dfsInOrder()).toEqual([3, 6, 8, 9, 10, 15, 16, 20, 22, 25, 29, 30, 32, 40, 50]);
  });
});
