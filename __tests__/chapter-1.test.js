import binarySearch from '../src/chapters/chapter-1/binarySearch.js';
import iterBinarySearch from '../src/chapters/chapter-1/iterBinarySearch.js';
import recursionBinarySearch from '../src/chapters/chapter-1/recursionBinarySearch.js';

test.each([
  ['Binary search', binarySearch],
  ['Iter binary search', iterBinarySearch],
  ['Recursion binary search', recursionBinarySearch],
])('%s', (name, binarySearchFunction) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15];

  expect(binarySearchFunction(array, 20)).toBe(-1);
  expect(binarySearchFunction([], 5)).toBe(-1);

  expect(binarySearchFunction(array, 8)).toBe(7);
  expect(binarySearchFunction(array, 4)).toBe(3);
  expect(binarySearchFunction(array, 15)).toBe(14);
});
