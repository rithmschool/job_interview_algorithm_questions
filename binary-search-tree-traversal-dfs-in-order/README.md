# Binary Search Tree Depth First Search - In Order

Write a method on a `BinarySearchTree` class called `dfsInOrder`. This method should return an array of values.

Definition Depth First Search:

**Depth-first search (DFS)** is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. - [wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)

**DFS In Order** In case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order. To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversal s reversed can be used. - [geeksforgeeks](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)

![Binary Search Tree - DFS In Order](../_images/bst-in-order.svg.png)
In-order: A, B, C, D, E, F, G, H, I

Notes:

- You can assume all values are unique
- Assume all values are integers
- [Video of DFS-In-Order](https://www.coursera.org/lecture/data-structures-optimizing-performance/core-post-order-in-order-and-level-order-traversals-breadth-first-search-zGs17)

Example 1: 
![Binary Search Tree](../_images/bst-traversal-one.png)

```js
let bst = BinarySearchTree();
let newNodes = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];

newNodes.forEach(val => bst.insert(val));

bst.dfsInOrder(); // [20, 25, 27, 35, 37, 45, 47, 50, 60, 65, 75, 85 ]
```

Example 2:
![Binary Search Tree](../_images/bst-traversal-two.png)
```js
let bst = BinarySearchTree();
let newNodes = [41, 20, 65, 29, 11, 91, 50, 99, 72];

newNodes.forEach(val => bst.insert(val));

bst.dfsInOrder(); // [11, 20, 29, 41, 50, 65, 72, 91, 99]
```

Additional Resources To Read:

[Medium DFS](https://medium.com/basecs/demystifying-depth-first-search-a7c14cccf056) - NOTE: HAS A SOLUTION ON THE BOTTOM
[Rithm School](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/binary-search-trees-traversal)

Companies that have asked this question:
