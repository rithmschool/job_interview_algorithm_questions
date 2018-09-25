# Max Depth Of A Binary Search Tree

Write a method on a `BinarySearchTree` class called `maxDepth`. This method should return a number which is the max depth of the BST.

You have been provided with a `BinarySearchTree` class, as well as a `BSTNode` class.

Definition:

The `maximum depth` is the number of nodes along the longest path from the root node down to the `farthest leaf node` - Leetcode

Notes:

- You can assume all values are unique

Example:

![Binary Search Tree - Least Common Ancestor](../_images/MaxDepthBST.png)

```js
let bst = new BinarySearchTree();
let bst2 = new BinarySearchTree();
let nodeValues = [41, 20, 65, 11, 29, 9, 12, 25, 32, 3, 10, 31, 36, 50, 91, 72, 99];
let nodeValues2 = [10,2,9]

nodeValues.forEach(val => bst.insert(val));
nodesValues3.forEach(val => bst2.insert(val));

best.maxDept(); // should return 5
best2.maxDepth(); // should return 2
```

Companies that have asked this question:
