[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# :unicorn: Unicorn Ninja Coding Challenge for 2019-09-06

(Adapted from: [_Daily Coding Problem_](https://www.dailycodingproblem.com/) @ 2019-08-21.)

The number `6174` is known as Kaprekar's contant, after the mathematician who discovered an associated property: for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value. The procedure is as follows:

- For a given input `x`, create two new numbers that consist of the digits in `x` in ascending and descending order.
- Subtract the smaller number from the larger number.

For example, this algorithm terminates in three steps when starting from `1234`:

- `4321 - 1234 = 3087`
- `8730 - 0378 = 8352`
- `8532 - 2358 = 6174`

Write a function that returns how many steps this will take for a given input `N`.

For bonus :unicorn: points, can you find a purely numerical solution for the problem (i.e. not involving the number's string representation)?

:warning: Note that you should only use the standard library of your language of choice (no external packages allowed).

If you choose to implement your solution using Node.js, this challenge comes with a unit test suite, which can be used to verify the correctness of your solution, and can be run with `npm test` or `yarn test`. Adjust your implementation to the expectations of `challenge.test.js`.

# Rules of engagement

Fork this repository and be ready to submit a PR with your solution when the time limit for the challenge is reached.
