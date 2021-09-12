import binarySearch from '../src/chapters/chapter-1/binarySearch.js';

test('Binary search', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 14, 15];

  expect(binarySearch(array, 20)).toBe(-1);
  expect(binarySearch([], 5)).toBe(-1);

  expect(binarySearch(array, 8)).toBe(7);
  expect(binarySearch(array, 4)).toBe(3);
  expect(binarySearch(array, 15)).toBe(14);
});
