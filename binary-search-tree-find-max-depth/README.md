# Max Depth Of A Binary Search Tree

Write a method on a `BinarySearchTree` class called `maxDepth`. This method should take in one node and return a number which is the max depth of the BST.

You have been provided with a `BinarySearchTree` class, as well as a `BSTNode` class.

Definition:

The `maximum depth` is the number of nodes along the longest path from the root node down to the `farthest leaf node` - Leetcode

Notes:
  - You can assume all values are unique

Example: 

![Binary Search Tree - Least Common Ancestor](../_images/MaxDepthBST.png)

```js
  let bst = new BinarySearchTree()
  let nodeValues = [41,20,65,11,29,9,12,25,32,3,10,31,36,50,91,72,99]
  nodeValues.forEach(val => bst.insert(val));
  let lowestNode1 = bst.find(36)
  let lowestNode2 = bst.find(3)
  let secondNode1 = bst.find(32)
  let secondNode2 = bst.find(9)

  bst.maxDepth(lowestNode1) // 1
  bst.maxDepth(lowestNode2) // 1
  bst.maxDepth(secondNode1) // 2
  bst.maxDepth(secondNode2) // 2
 ```

Companies that have asked this question:

