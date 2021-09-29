import recursionSum from '../src/chapters/chapter-4/recursionSum.js';
import iterSum from '../src/chapters/chapter-4/iterSum';

import recursionCounter from '../src/chapters/chapter-4/recursionCounter.js';
import iterCounter from '../src/chapters/chapter-4/iterCounter.js';

import recursionMax from '../src/chapters/chapter-4/recursionMax.js';
import iterMax from '../src/chapters/chapter-4/iterMax.js';

import quicksort from '../src/chapters/chapter-4/quicksort.js';

test.each([
  ['Recursion', recursionSum],
  ['Iter', iterSum],
])('%s sum', (name, recursionSumFunction) => {
  expect(recursionSumFunction([])).toBe(0);
  expect(recursionSumFunction([1, 2, 3, 4, 5])).toBe(15);
});

test.each([
  ['Recursion', recursionCounter],
  ['Iter', iterCounter],
])('%s counter', (name, recursionCounterFunction) => {
  expect(recursionCounterFunction([1, 2, 3, 4, 5])).toBe(5);
  expect(recursionCounterFunction([])).toBe(0);
});

test.each([
  ['Recursion', recursionMax],
  ['Iter', iterMax],
])('%s max', (name, recursionMaxFunction) => {
  expect(recursionMaxFunction([])).toBe(null);
  expect(recursionMaxFunction([10, 2, 5, 78, 99, 53, 38])).toBe(99);
});

test('quicksort', () => {
  expect(quicksort([])).toEqual([]);
  expect(quicksort([6, 9, 1, 5, 3, 11, 7])).toEqual([1, 3, 5, 6, 7, 9, 11]);
});
