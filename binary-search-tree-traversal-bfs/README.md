# Binary Search Tree Breadth Of First Search

Write a method on a `BinarySearchTree` class called `bfs`. This method should return an array of values.

Definition Breadth of First Search:

Trees can also be traversed in *level-order*, where we visit every node on a level before going to a lower level. This search is referred to as breadth-first search (BFS), as the search tree is broadened as much as possible on each depth before going to the next depth. - [wikipedia](https://en.wikipedia.org/wiki/Tree_traversal)

![Binary Search Tree - Breadth Of First Search](../_images/bfs-bst.svg)

Notes:

- You can assume all values are unique
- Assume all values are integers
- A queue data structure may be useful in solving this problem
- [Video of BFS](https://www.youtube.com/watch?v=9AEFRkI2SHA)

Example 1: 
![Binary Search Tree](../_images/bst-traversal-one.png)
```js
let bst = BinarySearchTree();
let newNodes = [50, 45, 65, 35, 25, 20, 75, 60, 85, 47, 37, 27];

newNodes.forEach(val => bst.insert(val));

bst.bfs(); // [ 50, 45, 65, 35, 47, 60, 75, 25, 37, 85, 20, 27 ]
```

Example 2:
![Binary Search Tree](../_images/bst-traversal-two.png)
```js
let bst = BinarySearchTree();
let newNodes = [41, 20, 65, 29, 11, 91, 50, 99, 72, 100];

newNodes.forEach(val => bst.insert(val));

bst.bfs(); // [ 41, 20, 65, 11, 29, 50, 91, 72, 99, 100 ]
```

Additional Resources To Read:

[Medium BFS](https://medium.com/basecs/breaking-down-breadth-first-search-cebe696709d9) - NOTE: HAS A SOLUTION ON THE BOTTOM
[Rithm School](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/binary-search-trees-traversal)

Companies that have asked this question: