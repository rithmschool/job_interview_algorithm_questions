# Job Interview Algorithm Questions

Welcome! The purpose of this repository is to give students a place to share interview questions that they've received on interviews. As this repository grows, it will also serve as a helpful resource for active job seekers, giving them plenty of opportunities to practice solving problems and working with unit tests.

## How it Works

Each problem in this repository has its own folder. Inside of the problem folder is a README with the problem description, as well as an ongoing list of which companies have asked this problem. Each folder also consists of an `index.js` file with starter code for the challenge, an `index.test.js` file with unit tests for the problem, and a `solution.js` with a solution which will pass all of the unit tests.

## How to Contribute

Want to contribute to this repository? Great! 

**For bug / typo fixes**, just submit a PR with the error you've found.

**For additional unit tests**, submit a PR with a note on why you think the extra unit tests are necessary.

**For adding a new problem**, make sure you stick to the structure outlined here. In particular:

  1. The problem should have its own folder, consisting of an `index.js`, `index.test.js`, `solution.js`, and `README.md`. 
  2. The folder name should be `kebab-case`, and should be named by the problem area first, rather than the specific problem (e.g. `binary-search-tree-lowest-common-ancestor`, not `lowest-common-ancestory-binary-search-tree`).
  3. If there is code that you anticipate being required across multiple different challenges (e.g. the starter classes for binary search trees), you can put that code inside of the `_starters` directory.

## Running the tests

To run the tests, make sure you have `jest` installed globally. You can run the tests for every problem by typing

```sh
npm test
```

in your terminal. To run the tests for a single problem, just pass the folder name to this command, e.g.

```sh
npm test binary-search-tree-lowest-common-ancestor
```
