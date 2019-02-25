# Job Interview Algorithm Questions

Welcome! The purpose of this repository is to give students a place to share interview questions that they've received on interviews. As this repository grows, it will also serve as a helpful resource for active job seekers, giving them plenty of opportunities to practice solving problems and working with unit tests.

## How it Works

Each problem in this repository has its own folder. Inside of the problem folder is a README with the problem description, as well as an ongoing list of which companies have asked this problem. Each folder also consists of an `index.js` file with starter code for the challenge, an `index.test.js` file with unit tests for the problem, and a `solution.js` with a solution which will pass all of the unit tests.

## How to Solve

If you're just interested in using this repository to get practice solving problems, we recommend you **clone** this repository. That way you can create a new repository tied to your account and point your `origin` to this new remote. As you solve problems, you can then `add`, `commit` and push them to your `origin`'s master branch (this is important for collecting green squares on your GitHub profile, since contributions on other branches won't count).

Setup is straightforward:

```sh
# install dependencies
npm i
```

To configure GitHub, first, create a new repository on your account. Then you could do the following:

```sh
# keep the link to rithmschool's original, so that you can pull down new problems
git remote rename origin upstream

# add a link to your new repo
git remote add origin LINK_TO_YOUR_REMOTE_GOES_HERE

# verify that you have two remotes: upstream and origin
git remote -v
```

You can push your solution code to your `origin`, and you can pull from `upstream` to get access to new problems as they're added.

## How to Contribute

Want to contribute to this repository? Great! In this case, we recommend creating a **fork** of the repository to add your new problem. This should be separate from your local copy where you're solving problems, since when you submit a PR, you don't want your new problem to have a bunch of your solution code come along with it.

In this case, if you don't have a fork, create one. Clone your fork, make your changes, push up to your fork, and create a pull request.

Common reasons why you'd want to submit a PR include, but are not limited to:

**If you get asked one of these questions on an interview**, please submit a PR to that problem's README adding the company name!

**For bug / typo fixes**, just submit a PR with the error you've found.

**For additional unit tests**, submit a PR with a note on why you think the extra unit tests are necessary.

**For adding a new problem**, make sure you stick to the structure outlined here. In particular:

  1. The problem should have its own folder, consisting of an `index.js`, `index.test.js`, `solution.js`, and `README.md`. 
  2. In the problem `README`, include a blank list of companies that have asked your question.
  3. The folder name should be `kebab-case`, and should be named by the problem area first, rather than the specific problem (e.g. `binary-search-tree-lowest-common-ancestor`, not `lowest-common-ancestory-binary-search-tree`).
  4. If there is code that you anticipate being required across multiple different challenges (e.g. the starter classes for binary search trees), you can put that code inside of the `_starters` directory.

Also, please note that not every problem you get asked will necessarily make for a good problem here. Sometimes you'll just be asked a ridiculously hard problem that involves data structures or problem solving strategies you knew nothing about. The goal here is to include problems that you think most of your classmates could solve, or will stretch their abilities in a satisfying way. If the problem is deemed too difficult, we may reject your PR. When in doubt, consult with an instructor before adding a problem!

## Running the tests

```sh
npm test
```

To run the tests for a single problem, just pass the folder name to this command, e.g.

```sh
npm test binary-search-tree-lowest-common-ancestor
```
