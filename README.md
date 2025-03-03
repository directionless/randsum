# `randsum`

`rand` for the rest of us

[![npm version](https://img.shields.io/npm/v/randsum)](https://www.npmjs.com/package/randsum)
[![bundle size](https://img.shields.io/bundlephobia/min/randsum)](https://bundlephobia.com/package/randsum)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/alxjrvs/randsum/blob/main/LICENSE.md)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat)](https://github.com/alxjrvs/randsum/blob/main/CODE_OF_CONDUCT.md)
[![codecov](https://codecov.io/gh/alxjrvs/randsum/branch/main/graph/badge.svg?token=uww6E0o1ob)](https://codecov.io/gh/alxjrvs/randsum)
[![Tests](https://github.com/alxjrvs/randsum/actions/workflows/tests.yml/badge.svg)](https://github.com/alxjrvs/randsum/actions/workflows/tests.yml)
[![Lint](https://github.com/alxjrvs/randsum/actions/workflows/lint.yml/badge.svg)](https://github.com/alxjrvs/randsum/actions/workflows/lint.yml)

## What is this?

It's a dice roller! Specifically, it's a random number generator that generates numbers from 1-N, rather than traditional random number generators, which work from 0-(N-1).

It accepts basic number and number strings, as well as dice notation for more complicated dice operations.

Check out the links below for more info!

## Further Reading

[Getting Started](https://github.com/alxjrvs/randsum/blob/main/GETTING_STARTED.md) - Installation and Documentation for using `randsum`

[Randsum Dice Notation](https://github.com/alxjrvs/randsum/blob/main/RANDSUM_DICE_NOTATION.md) - A guide for using [Dice Notation](https://en.wikipedia.org/wiki/Dice_notation) with `randsum`.

[Contributing](https://github.com/alxjrvs/randsum/blob/main/CONTRIBUTING.md) - help make `randsum` better!

[Sophie's Dice Notation](https://sophiehoulden.com/dice/documentation/notation.html) - a great dice notation guide that helped me along the way

[\_why's poignant guide to ruby](https://poignant.guide/) - \_why not?

## Why did you make this?

Sometime around 2012, I decided I wanted to learn to program. I had installed ruby on the best laptop six-hundred dollars could buy, set to make a dice roller as an easy first project.

I spent an easy 30 minutes trying to figure out how to make `rand(n)` return `1...n` instead of `0...(n-1)`.

When I found the answer, I laughed and laughed. I've been chasing that high ever since.
