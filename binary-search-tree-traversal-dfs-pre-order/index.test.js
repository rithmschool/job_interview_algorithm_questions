const { BinarySearchTree } = require('./');

describe('BinarySearchTree#DFSPreOrder', () => {
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
    expect(Array.isArray(bstOne.dfsPreOrder())).toBe(true);
    expect(Array.isArray(bstTwo.dfsPreOrder())).toBe(true);
    expect(Array.isArray(bstThree.dfsPreOrder())).toBe(true);
  });

  it('should return an array with the following order', () => {
    expect(bstOne.dfsPreOrder()).toEqual([50, 45, 35, 25, 20, 27, 37, 47, 65, 60, 75, 85]);
    expect(bstTwo.dfsPreOrder()).toEqual([41, 20, 11, 29, 65, 50, 91, 72, 99, 100]);
    expect(bstThree.dfsPreOrder()).toEqual([]);
    expect(bstFour.dfsPreOrder()).toEqual([20, 10, 8, 6, 3, 9, 15, 16, 40, 30, 25, 22, 29, 32, 50]);
  });
});
