# Binary Search Tree Depth First Search - Pre Order

Write a method on a `BinarySearchTree` class called `dfsPreOrder`. This method should return an array of values.

Definition Depth First Search:

**Depth-first search (DFS)** is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. - [wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)

**DFS Pre Order** In this traversal method, the root node is visited first, then the left subtree and finally the right subtree. - [geeksforgeeks](https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm)<br/>

![Binary Search Tree - DFS pre Order](../_images/bst-preorder.svg.png)
Post-order: F, B, A, D, C, E, G, I, H

Notes:

- You can assume all values are unique
- Assume all values are integers
- [Video of DFS-Pre-Order](https://www.coursera.org/lecture/data-structures-optimizing-performance/core-post-order-in-order-and-level-order-traversals-breadth-first-search-zGs17)

Example 1: 
![Binary Search Tree](../_images/bst-traversal-one.png)

```js
let bst = BinarySearchTree();
let newNodes = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];

newNodes.forEach(val => bst.insert(val));

bst.dfsPreOrder(); // [50, 45, 35, 25, 20, 27, 37, 47, 65, 60, 75, 85]
```

Example 2:
![Binary Search Tree](../_images/bst-traversal-two.png)
```js
let bst = BinarySearchTree();
let newNodes = [41, 20, 65, 29, 11, 91, 50, 99, 72];

newNodes.forEach(val => bst.insert(val));

bst.dfsPreOrder(); // [41, 20, 11, 29, 65, 50, 91, 72, 99]
```

Additional Resources To Read:

[Medium DFS](https://medium.com/basecs/demystifying-depth-first-search-a7c14cccf056) - NOTE: HAS A SOLUTION ON THE BOTTOM
[Rithm School]<br/>(https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/binary-search-trees-traversal)

Companies that have asked this question: